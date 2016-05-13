/* Import Dependencies */
import React, {
  AppRegistry,
  Component,
} from 'react-native';

/* Import all scenes */
import App from './app/App.js';

class smileguess extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('smileguess', () => smileguess);
