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
import EmojiKeyboard from '../components/EmojiKeyboard';
import DealerPrompt from '../components/DealerPrompt';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: screenHeight,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: 'white',
  },
  chatContainer: {
    width: screenWidth,
  },
});

/**
 * GameScreen is a React class component.
 * It defines the game room players will see while playing the game.
 * It displays messages as well as allows for user input form either the dealer
 * or the players who are guessing.
 * @param {Object} props - props for GameScreen component.
 * @param {function()} props.onSendGuess - handler for receiving players input
 * in the PlayerInput component.
 * @param {Array<Object>} props.messages - an array of message objects to be
 * rendered by the ChatsList component.
 * @param {function()} props.onSendClue - handler for receiving dealer input.
 * @param {bool} props.isDealer - indicates whether game screen should render
 * in player or dealer mode.
 * @param {string} props.dealerPrompt - prompt to be displayed to the dealer
 * which other players must guess based on emoji clues.
 *
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

  renderKeyboardInput() {
    return this.props.isDealer ? EmojiKeyboard : PlayerInput;
  }

  renderTopDisplay() {
    return this.props.isDealer ? DealerPrompt : View;
  }

  /* We must calculate styles on each render in order to animate height
   * based on state changes
   */
  render() {
    const { user, messages, players, onSendGuess, onSendClue, screenSize, game, dealerPrompt } = this.props;
    const localStyles = StyleSheet.create({
      container: {
        height: this.state.visibleHeight,
      },
    });
    const KeyboardInput = this.renderKeyboardInput();
    const TopDisplay = this.renderTopDisplay();
    return (
      <View style={[styles.container, localStyles.container]} >
        <ChatsList
          style={styles.chatContainer}
          messages={messages}
          players={players}
          screenSize={screenSize}
          user={user}
        />
        <KeyboardInput
          onSend={this.props.isDealer ? onSendClue : onSendGuess}
          screenSize={screenSize}
          userId={user.id}
          gameId={game.id}
        />
        <TopDisplay screenSize={screenSize} prompt={dealerPrompt} />
      </View>
    );
  }
}

GameScreen.propTypes = {
  onSendGuess: PropTypes.func.isRequired,
  onSendClue: PropTypes.func.isRequired,
  messages: PropTypes.array.isRequired,
  isDealer: PropTypes.bool,
  screenSize: PropTypes.object.isRequired,
  dealerPrompt: PropTypes.any,
  players: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
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
