// import components
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  PropTypes,
} from 'react-native';
import { connect } from 'react-redux';

// import provider
import { mapDealerPrompt } from '../providers/providers.js';
import { baseComponent } from '../styles/styles.js';

const styles = StyleSheet.create({
  prompt: Object.assign({}, baseComponent, {
    flex: 1, 
    height: 30,
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
    textAlign: 'center',
  })
});

const DealerPrompt = ({ prompt }) => <Text style={styles.prompt}> {prompt} </Text>;

DealerPrompt.propTypes = {
  prompt: PropTypes.string.isRequired,
};

const DealerPromptContainer = connect(
  mapDealerPrompt.mapStateToProps,
  mapDealerPrompt.mapDispatchToProps
)(DealerPrompt);

export default DealerPromptContainer;
