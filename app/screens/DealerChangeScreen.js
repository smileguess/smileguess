import React, { Component } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';
import DealerPrompt from '../components/DealerPrompt.js';
import { baseContainer, baseButton } from '../styles/styles.js';
import { colors } from '../styles/colors.js';

const styles = StyleSheet.create({
  container: Object.assign({}, baseContainer, {
    backgroundColor: 'rgba(241, 212, 194, 0.7)',
  }),
  button: baseButton,
  text: {
    color: colors.primary1,
    textAlign: 'center',
    fontWeight: 'bold',
    lineHeight: 21,
    fontSize: 14,
  },
  textEmptyLine: {
    lineHeight: 10,
  },
});

/**
 * DealerChange Screen is a React functional component.
 * It triggers a Modal which is displayed to the new dealer which
 * contains the new prompt for which the dealer will be giving clues.
 * @desc onPress additionally triggers navigation to next screen
 */
const DealerChangeScreen = () => (
  <View>
    <Modal
      animated={true}
      transparent={true}
      visible={true}
    >
      <View style={styles.container}>
        <Text style={styles.text} numberOfLines={2}>Congratulations, now YOU rule the game!
        {"\n"}
        Get ready to 🐝🍃👝🎉🌲🏆👊👷🎿🏀🐩:
        {"\n"}
        </Text>
        <View>
          <DealerPrompt />
        </View>
        <Text style={styles.textEmptyLine} numberOfLines={2}>
        {"\n"}
        </Text>
        <Button style={styles.button} onPress={Actions.pop}>Close here to start game!</Button>
      </View>
    </Modal>
  </View>
);

export default DealerChangeScreen;
