import React, {
  View,
  PropTypes,
  StyleSheet,
} from 'react-native';
import { NavBar } from 'react-native-router-flux';
import Toast from './Toast.js';

export default class CustomNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toastTransform: 0,
      navTransform: 1,
    };
  }
  render() {
    const localStyles = StyleSheet.create({
      container: {
        width: this.props.screenSize.width,
        height: 100,
        position: 'absolute',
        top: 0,
        right: 0,
      },
      toast: {
        transform: [
          { scaleY: 0 },
        ],
      },
      nav: {
        transform: [
          { scale: 1 },
        ],
      },
    });

    return (
      <View style={localStyles.container}>
        <View style={localStyles.toast} >
          <Toast {...this.props} />
        </View>
        <View style={localStyles.nav} >
          <NavBar {...this.props} />
        </View>
      </View>
    );
  }
}

CustomNav.propTypes = {
  showToast: PropTypes.bool.isRequired,
  screenSize: PropTypes.object,
};
