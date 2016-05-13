
// /* Import Dependencies */
import { connect } from 'react-redux';

/* Import Provider */
import { mapGameScreen } from '../providers/providers.js';

/* Import Components */
import React, {
  View,
  StyleSheet,
  PropTypes,
  Dimensions,
  DeviceEventEmitter,
  LayoutAnimation,
} from 'react-native';
import PlayerInput from '../components/PlayerInput.js';
import ChatsList from '../components/ChatsList.js';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: screenHeight,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  chatContainer: {
    width: screenWidth,
  },
});

/* eslint-disable react/prefer-stateless-function */
/**
 * GameScreen is a React class component.
 * It defines the game room players will see while playing the game.
 * It displays messages as well as allows for user input form either the dealer
 * or the players who are guessing.
 * @param {Object} props - props for GameScreen component.
 * @param {function()} props.onSubmitGuess - handler for receiving user input
 * in the PlayerInput component.
 * @param {Array<Object>} props.messages - an array of message objects to be
 * rendered by the ChatsList component.
 */
export class GameScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenHeight,
      screenWidth,
      visibleHeight: screenHeight,
      visibleWidth: screenWidth,
    };
  }

  /* Listen for the keyboard events and resize the component accordingly
   * leveraging React's LayoutAnimation API.
   */
  componentDidMount() {
    DeviceEventEmitter.addListener('keyboardWillShow', (e) => {
      LayoutAnimation.configureNext({
        duration: 250,
        update: {
          type: LayoutAnimation.Types.keyboard,
        },
      });
      this.setState({ visibleHeight: this.state.screenHeight - e.endCoordinates.height });
    });

    DeviceEventEmitter.addListener('keyboardWillHide', () => {
      LayoutAnimation.configureNext({
        duration: 250,
        update: {
          type: LayoutAnimation.Types.keyboard,
        },
      });
      this.setState({ visibleHeight: this.state.screenHeight });
    });
  }

  componentWillUnmount() {
    DeviceEventEmitter.removeAllListeners('keyboardWillHide');
    DeviceEventEmitter.removeAllListeners('keyboardWillShow');
  }

  /* We must calculate styles on each render in order to animate height
   * based on state changes
   */
  render() {
    const { messages, onSubmitGuess, showToast, toastMessage, screenSize } = this.props;
    const localStyles = StyleSheet.create({
      container: {
        height: this.state.visibleHeight,
      },
    });
    return (
      <View style={[styles.container, localStyles.container]} >
        <ChatsList style={styles.chatContainer} messages={messages} />
        <PlayerInput onSubmitEditing={onSubmitGuess} screenSize={screenSize} />
      </View>
    );
  }
}
/* eslint-enable react/prefer-stateless-function */

GameScreen.propTypes = {
  onSubmitGuess: PropTypes.func.isRequired,
  messages: PropTypes.array.isRequired,
  showToast: PropTypes.bool,
  toastMessage: PropTypes.string,
};

/**
 * GameScreenContainer is a 'container component' which binds the props and
 * actions creators of GameScreen to the store and dispatcher, respectively.
 * It should be imported in favor of HomeScreen, which is exported only
 * for documentation purposes.
 */
const GameScreenContainer = connect(
  mapGameScreen.mapStateToProps,
  mapGameScreen.mapDispatchToProps
)(GameScreen);

export default GameScreenContainer;
