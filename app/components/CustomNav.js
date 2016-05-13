import React, {
  PropTypes,
} from 'react-native';
import { NavBar } from 'react-native-router-flux';
import Toast from './Toast.js';

/**
 * CustomNav is a React class component which renders different Headers
 * depending on the UI state of the application.
 * @param {Object} props - props for the component which are pased through to
 * child components wholesale.
 */
export default class CustomNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { navType: this.props.navType || 'nav' };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ navType: nextProps.navType });
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
    return (
      <Header {...this.props} />
    );
  }
}

CustomNav.propTypes = {
  screenSize: PropTypes.object,
  navType: PropTypes.string,
};
