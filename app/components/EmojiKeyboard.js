/* Import Components */
import React, {
  PropTypes,
  View,
  TouchableHighlight,
  StyleSheet,
  Dimensions,
  LayoutAnimation,
} from 'react-native';
import Button from 'react-native-button';
import EmojiInput from './EmojiInput.js';
import EmojiKeys from './EmojiKeys.js';
import emojiData from '../assets/emojifile_array.js';
import Emoji from './Emoji.js';

const { height } = Dimensions.get('window');
const containerStyle = {
  flex: 1,
  justifyContent: 'flex-start',
  backgroundColor: '#c4c4c4',
  padding: 5,
  position: 'absolute',
  top: height - 55,
};

const styles = StyleSheet.create({
  buttonBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: '#FFFFFF',
    width: 100,
    marginLeft: 20,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
  },
});

/**
 * This is the top-level component for rendering the custom emoji-only keyboard.
 * @param {function} onSend - the callback function for when the user presses send.  It receives the array of tuples as it's argument when invoked.
 */
class EmojiKeyboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputView: [],
      input: [],
      hidden: true,
      containerStyle,
    };
  }

  updateInput(input) {
    this.setState({
      input: this.state.input.concat([input]),
    });
    this.setState({
      inputView: this.inputView(),
    });
  }

  inputView() {
    return this.state.input.map(
      ([sheet_x, sheet_y], index) => <Emoji key={index} x={sheet_x} y={sheet_y} />
    );
  }

  removeInput() {
    if (this.state.input.length) {
      this.setState({ input: this.state.input.slice(0, this.state.input.length - 1) });
      this.setState({
        inputView: this.inputView(),
      });
    }
  }

  toggleKeyboard() {
    this.setState({ hidden: !this.state.hidden });
    LayoutAnimation.configureNext({
      duration: 10,
      update: {
        type: LayoutAnimation.Types.linear,
      },
    });
    if (this.state.hidden) {
      this.setState({
        containerStyle: {
          ...containerStyle,
          top: height - 55,
        },
      });
    } else {
      this.setState({
        containerStyle: {
          ...containerStyle,
          top: height - 355,
        },
      });
    }
  }

  sendInput(input) {
    const { gameId, userId } = this.props;
    this.props.onSend({
      body: input,
      gameId,
      userId,
    });
    this.setState({
      input: [],
    });
    this.setState({
      inputView: this.inputView(),
    });
  }

  render() {
    return (<View style={StyleSheet.create({ container: this.state.containerStyle }).container}>
      <TouchableHighlight onPress={() => this.toggleKeyboard()}>
        <View>
          <EmojiInput emojiElements={this.state.inputView} />
        </View>
      </TouchableHighlight>
      <View>
        <EmojiKeys
          emojiData={emojiData}
          updateInput={(input) => this.updateInput(input)}
        />
      </View>
      <View style={styles.buttonBar}>
        <Button style={styles.button} onPress={() => this.removeInput()}>Backspace</Button>
        <Button
          className="sendButton"
          style={styles.button} 
          onPress={() => this.sendInput(this.state.input)}
        >Send</Button>
      </View>
    </View>);
  }
}

EmojiKeyboard.propTypes = {
  onSend: PropTypes.func.isRequired,
  gameId: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
};

export default EmojiKeyboard;
