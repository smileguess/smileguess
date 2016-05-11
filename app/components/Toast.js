/* Import Components */
import React, {
  View,
  StyleSheet,
  PropTypes,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: 'red',
    padding: 30,
  },
});

/**
 * Toast is a React functional component designed to provide modal notifications
 * across the application.
 * @param {string} props.message - text body of the message.
 */
const Toast = ({ show, message }) => (
  <View style={styles.container}>
    <Text> {message} </Text>
  </View>
);

Toast.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Toast;
