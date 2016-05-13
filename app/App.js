/* Import Dependencies */
import React, { Dimensions } from 'react-native';
import { Actions, Scene, Modal, Router, NavBar } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import DeviceInfo from 'react-native-device-info';

/* Import transition screens */
import HomeScreen from './screens/HomeScreen.js';
import GameScreen from './screens/GameScreen.js';
import StatsScreen from './screens/StatsScreen.js';
import DealerChangeScreen from './screens/DealerChangeScreen';
import Toast from './components/Toast.js';
import CustomNav from './components/CustomNav.js';


/* Import Store */
import configureStore from './store/configureStore.js';
const store = configureStore({});

/* Fetch user information */
fetch(`http://localhost:1234/api/user/${DeviceInfo.getUniqueID()}`)
  .then((res) => { // This `then` block should be removed when the server syncs up with ui development
    if (!res.ok) {
      return {
        id: 0,
        username: 'McFakerton',
        points: 0,
        wins: 0,
        emojicoins: 0,
        picture: '',
      };
    }
    return res;
  })
  .then((res) => res.json())
  .then((user) => {
    store.dispatch({
      type: 'UPDATE_USER_STATE',
      user,
    });
  })
  .catch((error) => {
    throw error;
  });

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
        type="push" key="showGameScreen" component={GameScreen} title="Your game!"
        onRight={() => Actions.showStatsScreen()} rightTitle="Stats"
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
