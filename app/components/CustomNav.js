import React, {
  PropTypes,
} from 'react-native';
import { NavBar } from 'react-native-router-flux';
import Toast from './Toast.js';

export default class CustomNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { navType: this.props.navType };
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
