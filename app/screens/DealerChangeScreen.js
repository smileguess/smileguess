import React, { Component } from 'react';
import { View,
  Text,
  StyleSheet }
  from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

import DealerPrompt from '../components/DealerPrompt.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFCE9',
  },
  button: {
    color: '#5979A8',
    fontSize: 14,
  },
  text: {
    color: 'black',
    textAlign: 'center',
  },
});

class DealerChangeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text} numberOfLines={2}>Congratulations, now you rule the game!
        {"\n"}
        Be ready to emojify:
        {"\n"}
        </Text>
        <View>
          <DealerPrompt />
        </View>
        <Text style={styles.text} numberOfLines={2}>
        {"\n"}
        </Text>
        <Button style={styles.button} onPress={Actions.pop}>Close to start game!</Button>
      </View>
    );
  }
}

export default DealerChangeScreen;
