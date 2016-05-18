/* Import React/ Redux dependencies */
import React, {
  PropTypes,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';

/* Import Nav Sub Compoents */
import { NavBar, Actions } from 'react-native-router-flux';
import Toast from './Toast.js';

import _backButtonImage from 'react-native-router-flux/src/back_chevron.png';

/* Import Provider */
import { mapCustomNav } from '../providers/providers.js';

const styles = StyleSheet.create({
  backButton: {
    width: 130,
    height: 37,
    position: 'absolute',
    bottom: 4,
    left: 2,
    padding: 8,
    flexDirection: 'row',
  },
  backButtonImage: {
    width: 13,
    height: 21,
  },
});


/**
 * CustomNav is a React class component which renders different Headers
 * depending on the UI state of the application.
 * @param {Object} props - props for the component which are pased through to
 * child components wholesale.
 */
export class CustomNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { navType: 'nav' };
    this.renderBackButton = this.renderBackButton.bind(this);
    // console.warn(Object.keys(props));
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.notifications.length > 0) {
      this.setState({ navType: 'toast' });
      this.setState({ headerProps: { toastMessage: nextProps.notifications[0].body } });
      return;
    }
    this.setState({ navType: 'nav' });
  }
  renderBackButton() {
    const state = this.props.navigationState;
    const childState = state.children[state.index];
    let buttonImage = childState.backButtonImage ||
      state.backButtonImage || this.props.backButtonImage;
    const onBack = childState.onBack || state.onBack || this.props.onBack;
    let onPress = () => {
      Actions.pop();
      if (onBack) onBack();
    };

    if (state.index === 0) {
      return null;
    }

    let text = childState.backTitle ?
      <Text
        style={[
          styles.barBackButtonText,
          this.props.backButtonTextStyle,
          state.backButtonTextStyle,
          childState.backButtonTextStyle,
        ]}
      >
        {childState.backTitle}
      </Text>
      : null;

    return (
      <TouchableOpacity
        style={[
          styles.backButton,
          this.props.leftButtonStyle,
          state.leftButtonStyle,
          childState.leftButtonStyle,
        ]}
        onPress={onPress}
      >
        {buttonImage &&
          <Image
            source={buttonImage}
            style={[
              styles.backButtonImage,
              this.props.leftButtonIconStyle,
              state.barButtonIconStyle,
              state.leftButtonIconStyle,
              childState.leftButtonIconStyle,
            ]}
          />
        }
        {text}
      </TouchableOpacity>
    );
  }
  renderNavigationBar() {
    switch (this.state.navType) {
      case 'nav':
        return NavBar;
      case 'toast':
        return Toast;
      default:
        return NavBar;
    }
  }
  render() {
    const Header = this.renderNavigationBar();

    /* Hack to override the back button of the react-native-flux-router */
    const state = this.props.navigationState;
    const selected = state.children[state.index];
    selected.renderBackButton = this.renderBackButton;

    return (
      <Header {...this.props} {...this.state.headerProps} />
    );
  }
}

CustomNav.propTypes = {
  screenSize: PropTypes.object.isRequired,
  onBack: PropTypes.func,
  backButtonImage: PropTypes.number,
  navigationState: PropTypes.object,

};

CustomNav.defaultProps = {
  backButtonImage: _backButtonImage,
};

const CustomNavContainer = connect(
  mapCustomNav.mapStateToProps,
  mapCustomNav.mapDispatchToProps
)(CustomNav);

export default CustomNavContainer;
