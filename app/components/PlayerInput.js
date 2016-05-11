/* Import Components */
import React, {
  View,
  StyleSheet,
  PropTypes,
  TextInput,
} from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: '#c4c4c4',
    padding: 5,
  },
  inputField: {
    flex: 1,
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
    alignSelf: 'center',
    paddingLeft: 15,
    borderRadius: 4,
  },
  send: {
    padding: 5,
  },
});

const PlayerInput = ({ onSubmitEditing }) => (
  <View style={styles.container}>
    <TextInput
      style={styles.inputField}
      placeholder="Input your guess"
      returnKeyType="send"
      onSubmitEditing={(event) => (onSubmitEditing(event.nativeEvent.text))}
    />
    <Button
      style={styles.send}
      onPress={() => Actions.showGameScreen_toast({
        showToast: true,
        toastMessage: 'Sylvia has won the game!',
      })}
    >Send</Button>
  </View>
);

PlayerInput.propTypes = {
  onSubmitEditing: PropTypes.func.isRequired,
};

export default PlayerInput;
