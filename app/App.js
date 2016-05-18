/* Import Dependencies */
import React, { Dimensions } from 'react-native';
import { Actions, Scene, Modal, Router } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import DeviceInfo from 'react-native-device-info';

/* Import transition screens */
import HomeScreen from './screens/HomeScreen.js';
import GameScreen from './screens/GameScreen.js';
import StatsScreen from './screens/StatsScreen.js';
import CustomNav from './components/CustomNav.js';
import DealerChangeScreen from './screens/DealerChangeScreen.js';
import config from './utils/config.js';

/* Import Store */
import { socket, configureStore } from './store/configureStore.js';
const store = configureStore({});

socket.on('disconnect', () => {
  // TODO: Add logic for figuring out whether you've intentionally 
  // disconnected and if not, we should display error in toast so the
  // user knows why they've been dumped back in the home screen
  Actions.showHomeScreen();
});

/* Setup store with fake game data REMOVE FOR PRODUCTION*/
// import { fakeGameCreator, makeFakeMessageAdder } from './testdata/dummyData.js';
// store.dispatch(fakeGameCreator());

/* Add fake messages to store every 10 seconds */
// const fakeMessageAdder = makeFakeMessageAdder();
// store.dispatch(fakeMessageAdder());
// setInterval(() => store.dispatch(fakeMessageAdder()), 10000);

/* Fetch user information (REMOVE 'then' block for production)*/
const fetchUserInfo = () => {
  fetch(`${config.serverUrl}/api/user/${DeviceInfo.getUniqueID()}`)
  .then((res) => {
    if (!res.ok) {
      throw error;
    }
    return res;
  })
  .then((res) => res.json())
  .then((user) => {
    if (user) {
      store.dispatch({
        type: 'UPDATE_USER_STATE',
        payload: user,
      });
    } else {
      setTimeout(fetchUserInfo, 501);
    }
  })
  .catch((error) => {
    console.warn('Check for user again in 501ms');
    setTimeout(fetchUserInfo, 501);
  }); // End Fetch Promise Block
};
fetchUserInfo();

/* Set up router */
const RouterWithRedux = connect()(Router);

/* Set up initial global UI state */
const { height, width } = Dimensions.get('window');
const screenSize = {height, width};

/**
 * @desc scenes define transition screens
 * @param hideNavBar - hides navigation bar for select screen
 * @param type - defines how screen is added to the navigation pack
 * @param key - required, unique - used to call screen transitions
 * @param title - screen title in navigation bar
 */
const scenes = Actions.create(
  <Scene key="modal" component={Modal} >
    <Scene key="root">
      <Scene hideNavBar type="replace" key="showHomeScreen" initial component={HomeScreen} />
      <Scene
        type="push"
        key="showGameScreen"
        component={GameScreen}
        navBar={CustomNav}
        title="Your game!"
        onRight={() => Actions.showStatsScreen()}
        rightTitle="Stats"
      >
        <Scene
          key="showGameScreen_default"
          navBar={CustomNav}
          screenSize={screenSize}
        />
        <Scene
          key="showGameScreen_toast"
          navBar={CustomNav}
          screenSize={screenSize}
        />
      </Scene>
      <Scene
        type="push" key="showStatsScreen" component={StatsScreen} title="Game Stats"
      />
    </Scene>
  </Scene>
);

/**
 * App is the entrypoint for both the ios and (in the future) Android versions
 * of the app. It is rendered only once when the app is loaded and instantiates
 * all of the applicaiton routes, the store and the provider.
 */
const App = () => (
  <Provider store={store} >
    <RouterWithRedux scenes={scenes} screenSize={screenSize} />
  </Provider>
);

export default App;
