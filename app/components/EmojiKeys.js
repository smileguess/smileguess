/* Import Components */
import React, {
  PropTypes,
  View,
  TouchableHighlight,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import Emoji from './Emoji.js';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 255,
    width,
    justifyContent: 'flex-start',
    backgroundColor: '#e7e2e2',
    padding: 7,
  },
  scrollContainer: { // ContentContainerStyle
    flex: 1,
    flexDirection: 'row',
  },
  touchable: {
    flex: 1,
    borderWidth: 0,
    overflow: 'hidden',
  },
  emojiButtonView: {
    borderStyle: 'solid',
    borderRadius: 5,
    width: 38,
    height: 38,
    margin: 1,
  },
  emojiPage: {
    height: 255,
    flexDirection: 'column',
    flexWrap: 'wrap',
    flex: 1,
  },
});

class EmojiPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderAsync: this.props.renderAsync,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ renderAsync: false });
    }, this.props.delay);
  }
  render() {
    return (<View style={styles.emojiPage}>
      {this.state.renderAsync ? <View /> : this.props.emojiPage.map((emoji, emojiIndex) => (
        <View key={emojiIndex} style={styles.emojiButtonView}>
          <TouchableHighlight
            className="emojiButton"
            style={styles.touchable}
            onPress={() => this.props.updateInput([emoji.sheet_x, emoji.sheet_y])}
          >
            <View><Emoji x={emoji.sheet_x} y={emoji.sheet_y} /></View>
          </TouchableHighlight>
        </View>))
      }
    </View>);
  }
}

EmojiPage.propTypes = {
  renderAsync: PropTypes.bool,
  updateInput: PropTypes.func.isRequired,
  emojiPage: PropTypes.array.isRequired,
  delay: PropTypes.number.isRequired,
};

EmojiPage.defaultProps = {
  renderAsync: true,
  delay: 100,
};


/**
 * This component creates the array of emoji keys that are pressable on the keyboard.  NOTE: this component does not re-render.
 * @param {function} updateInput - this is the function passed down from the EmojiKeyboard component which is used to pass the input to the EmojiInput component
 * @param {array} emojiData - this is an array of objects which represent each emoji.  The essential part is that it have a `sheet_x` and `sheet_y` property to represent the emoji's x/y coordinate on the spritemap
 */
class EmojiKeys extends React.Component {
  constructor(props) {
    super(props);

    const emojiDataArray = this.props.emojiData;
    const pageSize = this.props.pageSize;
    const emojiPageArray = [];

    this.props.emojiCategories.map((cat) => {
      emojiPageArray.push(this.props.emojiData.filter((emoji) => emoji.category === cat));
    });

    // for (let i = 0; i < emojiDataArray.length; i += pageSize) {
    //   emojiPageArray.push(emojiDataArray.slice(i, i + pageSize));
    // }

    this.state = { emojiPageArray };
  }
  shouldComponentUpdate() {
    return false;
  }
  render() {
    const { updateInput } = this.props;
    return (<View style={styles.container}>
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        overflow="hidden"
      >
        {this.state.emojiPageArray.map((page, pageIndex) => (
          <EmojiPage
            key={pageIndex}
            delay={pageIndex * 100}
            updateInput={updateInput}
            emojiPage={page}
          />
          ))
        }
      </ScrollView>
    </View>);
  }
}

EmojiKeys.propTypes = {
  updateInput: PropTypes.func.isRequired,
  emojiData: PropTypes.array.isRequired,
  emojiCategories: PropTypes.array.isRequired,
  pageSize: PropTypes.number,
};

EmojiKeys.defaultProps = {
  pageSize: 54,
};

export default EmojiKeys;
