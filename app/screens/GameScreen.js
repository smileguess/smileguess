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

import { colors } from '../styles/colors.js';
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: screenHeight,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: 'white',
    paddingBottom: 40,
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

    this.onKeyboardShow = this.onKeyboardShow.bind(this);
    this.onKeyboardHide = this.onKeyboardHide.bind(this);
  }


  /* Listen for the keyboard events and resize the component accordingly
   * leveraging React's LayoutAnimation API.
   */
  componentDidMount() {
    DeviceEventEmitter.addListener('keyboardWillShow', this.onKeyboardShow);
    DeviceEventEmitter.addListener('keyboardWillHide', this.onKeyboardHide);
  }

  componentWillReceiveProps(nextProps) {
    setTimeout(() => this.setState({ isDealer: nextProps.isDealer }), 1000);
  }

  componentWillUnmount() {
    DeviceEventEmitter.removeAllListeners('keyboardWillHide');
    DeviceEventEmitter.removeAllListeners('keyboardWillShow');
  }

  onKeyboardShow(e) {
    const listView = this.refs.chatsList.refs.listView;
    LayoutAnimation.configureNext({
      duration: 250,
      update: {
        type: LayoutAnimation.Types.keyboard,
      },
    });
    this.setState({ visibleHeight: this.state.screenHeight - e.endCoordinates.height });
    listView.scrollTo({ x: 0, y: e.endCoordinates.height, animated: true });
  }

  onKeyboardHide() {
    const listView = this.refs.chatsList.refs.listView;
    LayoutAnimation.configureNext({
      duration: 250,
      update: {
        type: LayoutAnimation.Types.keyboard,
      },
    });
    this.setState({ visibleHeight: this.state.screenHeight });
    listView.scrollTo({ x: 0, y: 0, animated: true });
  }


  topDisplay() {
    const prompt = this.state.isDealer ? this.props.dealerPrompt : this.props.hintForDisplay;
    const color = this.state.isDealer ? colors.primary2 : colors.primary1;

    return <DealerPrompt backgroundColor={color} screenSize={this.props.screenSize} prompt={prompt} />;
  }

  renderKeyboardInput() {
    return this.state.isDealer ? EmojiKeyboard : PlayerInput;
  }

  /* We must calculate styles on each render in order to animate height
   * based on state changes
   */
  render() {
    const { user, messages, players, onSendGuess, onSendClue, game, dealerPrompt, screenSize } = this.props;
    const localStyles = StyleSheet.create({
      container: {
        height: this.state.visibleHeight,
        paddingTop: 80,
      },
    });
    const KeyboardInput = this.renderKeyboardInput();
    return (
      <View style={[styles.container, localStyles.container]} >
        <ChatsList
          ref="chatsList"
          style={styles.chatContainer}
          messages={messages}
          players={players}
          screenSize={screenSize}
          user={user}
        />
        <KeyboardInput
          onSend={this.state.isDealer ? onSendClue : onSendGuess}
          screenSize={screenSize}
          userId={user.id}
          gameId={game.id}
          onKeyboardShow={this.onKeyboardShow}
          onKeyboardHide={this.onKeyboardHide}
        />
        {this.topDisplay()}
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
  hintForDisplay: PropTypes.any,
  category: PropTypes.any,
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
