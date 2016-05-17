/* Import Components */
import React, {
  StyleSheet,
  View,
  PropTypes,
  Text,
} from 'react-native';

import { colors } from '../styles/colors.js';

const styles = StyleSheet.create({
  eventMessage: {
    height: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.secondary2,
  },
  container: {
    flex: 1,
    backgroundColor: colors.primary1,
    borderRadius: 4,
    padding: 2,
    paddingLeft: 15,
    paddingRight: 15,
    margin: 10,
  },
});

/**
 * Event is a React functional component.
 * It renders a single message with useful metadata.
 * @param {Object} props - props for this component is a message object.
 * @param {string} props.type - specifies if message is a clue, a guess, or an event notification.
 * @param {number} props.userid - userid is 0 if message is sent from server.
 * @param {string} props.timestamp - UTC timestamp for displaying when message
 * was sent.
 * @param {string} props.message - text body of the message.
 */

const Event = ({ id, time, userId, type, message }) => (
  <View style={styles.container}>
    <Text style={styles.eventMessage}> 🏆 {message} 🏆 </Text>
  </View>
);

Event.propTypes = {
  id: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Event;

