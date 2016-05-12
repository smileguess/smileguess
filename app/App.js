/* Import Dependencies */
import React, { Dimensions } from 'react-native';
import { Actions, Scene, Modal, Router } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import DeviceInfo from 'react-native-device-info';

/* Import transition screens */
import HomeScreen from './HomeScreen.js';
import GameScreen from './GameScreen.js';
import StatsScreen from './StatsScreen.js';
import DealerChangeScreen from './DealerChangeScreen';
import Toast from '../components/Toast.js';

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
        <Scene key="showGameScreen_default" showToast={false} />
        <Scene key="showGameScreen_toast" navBar={Toast} />
      </Scene>
      <Scene
        type="push" key="showStatsScreen" component={StatsScreen} title="Game Stats"
      />
    </Scene>
  </Scene>
);

const App = () => (
  <Provider store={store} screenSize={screenSize}>
    <RouterWithRedux scenes={scenes} />
  </Provider>
);

export default App;
