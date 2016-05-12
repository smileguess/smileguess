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

const PlayerInput = ({ onSubmitEditing, screenSize }) => (
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
        onSubmitEditing={(event) => (onSubmitEditing(event.nativeEvent.text))}
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
  onSubmitEditing: PropTypes.func.isRequired,
};

export default PlayerInput;
