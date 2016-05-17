/* Import Components */
import React, {
  StyleSheet,
  View,
  PropTypes,
} from 'react-native';
import Emoji from './Emoji.js';

const styles = StyleSheet.create({
  container: {

  },
});

/**
 * ClueMessage is a React functional component.
 * It renders a single message with useful metadata.
 * @param {Object} props - props for this component is a message object.
 */

const ClueMessage = ({ userId, time, body, currentUser, players, screenSize }) => (
  <View style={styles.container}>
    {
      body.map(
        ([sheetX, sheetY], index) => (<Emoji key={index} x={sheetX} y={sheetY} />)
      )
    }
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
