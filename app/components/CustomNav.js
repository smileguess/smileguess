/* Import React/ Redux dependencies */
import React, {
  PropTypes,
} from 'react-native';
import { connect } from 'react-redux';

/* Import Nav Sub Compoents */
import { NavBar } from 'react-native-router-flux';
import Toast from './Toast.js';

/* Import Provider */
import { mapCustomNav } from '../providers/providers.js';

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
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.notifications.length > 0) {
      this.setState({ navType: 'toast' });
      this.setState({ headerProps: { toastMessage: nextProps.notifications[0].body } });
      return;
    }
    this.setState({ navType: 'nav' });
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
      <Header {...this.props} {...this.state.headerProps} />
    );
  }
}

CustomNav.propTypes = {
  screenSize: PropTypes.object.isRequired,
};

const CustomNavContainer = connect(
  mapCustomNav.mapStateToProps,
  mapCustomNav.mapDispatchToProps
)(CustomNav);

export default CustomNavContainer;
