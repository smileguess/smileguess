/* Import Dependencies */
import { connect } from 'react-redux';

/* Import Provider */
import { mapHomeScreen } from '../providers/providers.js';

/* Import Components */
import React, {
  View,
  StyleSheet,
  PropTypes,
  Image,
  Text,
  Dimensions,
} from 'react-native';
import Button from 'react-native-button';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
  },
  button: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: 'grey',
    fontWeight: 'bold',
  },
  emptyText: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    fontSize: 32,
  },
  backgroundImage: {
    width: screenWidth,
    height: screenHeight,
  },
});

/**
 * Home Screen is a React functional component.
 * It provides an entry point for joining a random game.
 * In the future, it will display a list of available games to join.
 * @param {{onJoinRandomGame: function()}} onPress event handler for the Join Game button.
 * @desc onPress additionally triggers navigation to GameScreen
 */
export const HomeScreen = ({ onJoinRandomGame }) => (
  <View>
    <Image source={require('../assets/background.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.emptyText}> {"\n"} {"\n"} {"\n"} </Text>
        <View>
          <Image source={require('../assets/logo.png')} />
        </View>
        <Text style={styles.emptyText}> {"\n"} </Text>
        <Button
          style={styles.button}
          onPress={onJoinRandomGame}
        >Click to play now! </Button>
      </View>
    </Image>
  </View>
);

HomeScreen.propTypes = {
  onJoinRandomGame: PropTypes.func.isRequired,
};


/**
 * HomeScreenContainer is a 'container component' which binds the props and
 * actions creators of HomeScreen to the store and dispatcher, respectively.
 * It should be imported in favor of HomeScreen, which is exported only
 * for documentation purposes.
 */
const HomeScreenContainer = connect(
  mapHomeScreen.mapStateToProps,
  mapHomeScreen.mapDispatchToProps
)(HomeScreen);

export default HomeScreenContainer;
