// import components
import React, {
  StyleSheet,
  Text,
  PropTypes,
  View,
} from 'react-native';

// import provider
import { colors } from '../styles/colors.js';

const styles = StyleSheet.create({
  prompt: {
    textAlign: 'left',
  },
  container: {
    height: 30,
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
    top: 62,
    right: 0,
    backgroundColor: colors.primary2,
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
  },
});

/**
* DealerPrompt is a React functional component. It displays the prompt to the
* current dealer.
* @param {Object} props
* @param {Object} props.screenSize - device dimensions required to
* render correctly.
* @param {string} props.prompt - prompt text to be displayed to the dealer.
*/
const DealerPrompt = ({ prompt, screenSize, backgroundColor }) => {
  const localStyles = StyleSheet.create({
    container: {
      width: screenSize.width,
      backgroundColor,
    },
  });
  return (
    <View style={[styles.container, localStyles.container]}>
      <Text style={styles.prompt}> {prompt} </Text>
    </View>
  );
};

DealerPrompt.propTypes = {
  prompt: PropTypes.string,
  screenSize: PropTypes.object.isRequired,
  backgroundColor: PropTypes.any,
};

export default DealerPrompt;
