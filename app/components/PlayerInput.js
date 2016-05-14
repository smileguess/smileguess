/* Import Components */
import React, {
  View,
  StyleSheet,
  PropTypes,
  TextInput,
} from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
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
 */
const PlayerInput = ({ onSend, screenSize }) => (
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
        style={styles.inputField}
        placeholder="Input your guess"
        returnKeyType="send"
        onSubmitEditing={(event) => (onSend(event.nativeEvent.text))}
      />
      <Button
        style={styles.send}
        onPress={() => Actions.showGameScreen_toast({
          navType: 'toast',
          toastMessage: 'Sylvia has won the game!',
        })}
      >Send</Button>
    </BlurView>
  </View>
);

PlayerInput.propTypes = {
  onSend: PropTypes.func.isRequired,
  screenSize: PropTypes.object.isRequired,
};

export default PlayerInput;
