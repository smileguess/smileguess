/* Import Components */
import React, {
  View,
  StyleSheet,
  PropTypes,
  TextInput,
} from 'react-native';
import Button from 'react-native-button';
import { BlurView } from 'react-native-blur';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: 'rgba(150, 150, 150, 0.15)',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  blurContainer: {
    padding: 5,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  inputField: {
    flex: 1,
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    alignSelf: 'center',
    paddingLeft: 15,
    borderRadius: 4,
  },
  send: {
    padding: 5,
  },
});


/**
 * PlayerInput is a funcitonal react component which renders a styled text
 * input which triggers the native keyboard when in focus.
 * @param {Object} props - props for GameScreen component.
 * @param {Object} props.screenSize - dimensions of the device screen.
 * @param {function()} props.onSend - handler to be called to when user
 * enters input and hits send.
 * @param {number} props.gameId
 * @param {number} props.userId
 */
class PlayerInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  render() {
    const { onSend, screenSize, userId, gameId } = this.props;
    return (
      <View
        style={[
          styles.container,
          { width: screenSize.width },
        ]}
      >
        <BlurView
          style={styles.blurContainer}
          blurType="light"
        >
          <TextInput
            ref="textInput"
            style={styles.inputField}
            placeholder="Input your guess"
            returnKeyType="send"
            onSubmitEditing={(event) => {
              onSend({
                body: event.nativeEvent.text,
                userId,
                gameId,
              });
              this.refs.textInput.clear();
            }}
            onChange={(event) => {
              this.setState({
                text: event.nativeEvent.text,
              });
            }}
            value={this.state.text}
            blurOnSubmit={false}
          />
          <Button
            style={styles.send}
            onPress={() => {
              onSend({
                body: this.state.text,
                userId,
                gameId,
              });
              this.setState({ text: '' });
            }}
          >Send</Button>
        </BlurView>
      </View>
    );
  }
}

PlayerInput.propTypes = {
  onSend: PropTypes.func.isRequired,
  screenSize: PropTypes.object.isRequired,
  gameId: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
};

export default PlayerInput;
