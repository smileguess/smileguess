/* Import Components */
import React, {
  View,
  StyleSheet,
  PropTypes,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import { BlurView } from 'react-native-blur';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    height: 100,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  containerTint: {
    backgroundColor: 'rgba(0, 129, 28, 0.2)',
    height: 100,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  font: {
    color: 'white',
    fontSize: 18,
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  buttonBG: {
    padding: 5,
    borderColor: 'rgba(255, 255, 255, 0.55)',
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: 'rgba(137, 142, 141, 0.1)',
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

/**
 * Toast is a React class component designed to provide modal notifications
 * across the application.
 * @param {string} props.message - text body of the message.
 */
class Toast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),
    };
  }
  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 400,
        easing: Easing.inOut(Easing.quad),
      },
    ).start();
  }
  render() {
    const { toastMessage, screenSize, dequeueMemo } = this.props;
    return (
      <Animated.View
        style={{
          transform: [
            // { scaleY: this.state.fadeAnim },
            { translateY:
              this.state.fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [-100, 0],
              }),
            },
          ],
          height: 100,
          position: 'absolute',
          top: 0,
          right: 0,
        }}
      >
        <Image
          style={[
            styles.containerTint,
            {
              width: screenSize.width,
            },
          ]}
        >
          <BlurView
            blurType="light"
            style={[
              styles.container,
              {
                width: screenSize.width,
              },
            ]}
          >
            <View style={styles.row1}>
              <TouchableOpacity
                style={styles.buttonBG}
                onPress={dequeueMemo}
              >
                <Text style={styles.font}> X </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row2}>
              <Text style={styles.font}> {toastMessage} </Text>
            </View>
          </BlurView>
        </Image>
      </Animated.View>
    );
  }
}
Toast.propTypes = {
  toastMessage: PropTypes.string.isRequired,
  screenSize: PropTypes.object.isRequired,
  dequeueMemo: PropTypes.func,
};

export default Toast;
