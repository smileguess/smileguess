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

const { width } = Dimensions.get('window');

const containerStyle = {
  flex: 1,
  justifyContent: 'flex-start',
  backgroundColor: '#c4c4c4',
  position: 'absolute',
  bottom: 0,
  width,
};

const styles = StyleSheet.create({
  inputEmojis: {
    transform: [
      { scale: 0.5 },
    ],
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
      renderKeyboard: false,
    };

    this.sendInput = this.sendInput.bind(this);
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
      ([sheet_x, sheet_y], index) => (
        <Emoji
          key={index}
          x={sheet_x}
          y={sheet_y}
          scale={0.65}
        />
      )
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
        },
      });
    } else {
      this.setState({
        containerStyle: {
          ...containerStyle,
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

  componentDidMount() {
    setTimeout(() => {
      this.setState({ renderKeyboard: true });
    }, 100);
  }

  render() {
    return (<View style={StyleSheet.create({ container: this.state.containerStyle }).container}>
      <TouchableHighlight onPress={() => this.toggleKeyboard()}>
        <View>
          <EmojiInput
            emojiElements={this.state.inputView}
            screenSize={this.props.screenSize}
            onSend={this.sendInput}
            value={this.state.input}
            onClear={() => {
              this.setState({
                input: [],
              });
              this.setState({
                inputView: this.inputView(),
              });
            }}
          />
        </View>
      </TouchableHighlight>
      <View>
      {
        this.state.renderKeyboard ?
        (<EmojiKeys
          emojiData={emojiData}
          updateInput={(input) => this.updateInput(input)}
        />) : <View />
      }
      </View>
    </View>);
  }
}

EmojiKeyboard.propTypes = {
  onSend: PropTypes.func.isRequired,
  gameId: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  screenSize: PropTypes.object.isRequired,
};

export default EmojiKeyboard;
