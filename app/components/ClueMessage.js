/* Import Components */
import React, {
  StyleSheet,
  View,
  PropTypes,
  Text,
} from 'react-native';
import Emoji from './Emoji.js';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  body: {
    flex: 1,
    flexDirection: 'row',
  },
  messageMeta: {
    flex: 1,
  },
  messageMetaFont: {
    flex: 1,
    color: 'grey',
  },
  messageBubble: {
    padding: 15,
    borderRadius: 4,
    backgroundColor: '#EEEEEE',
  },
});

/**
 * ClueMessage is a React functional component.
 * It renders a single message with useful metadata.
 * @param {Object} props - props for this component is a message object.
 */

const ClueMessage = ({ userId, time, body, currentUser, players, screenSize }) => (
  <View style={styles.container}>
    <View style={styles.messageMeta}>
      <Text style={styles.messageMetaFont}>
      {userId === currentUser.id ? 'me' : players.all[userId].username}
      </Text>
    </View>
    <View style={styles.messageBubble}>
      <View style={styles.body}>
        {
          body.map(
            ([sheetX, sheetY], index) => (<Emoji key={index} x={sheetX} y={sheetY} />)
          )
        }
      </View>
    </View>
  </View>
);

ClueMessage.propTypes = {
  userId: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
  body: PropTypes.array.isRequired,
  currentUser: PropTypes.object.isRequired,
  players: PropTypes.object.isRequired,
  screenSize: PropTypes.object.isRequired,
};

export default ClueMessage;
