/* Import Test Utils */
import TestUtils from 'react-addons-test-utils';
import { findWithType } from 'react-shallow-testutils';

/* Import Mocks for Testing */
import React from 'react-native'; // <rootdir>/app/__mocks__/react-native.js
import Button from 'react-native-button'; // Mocked automatically

/* Must be mocked explicitly because set as an unmocked module in package.json */
jest.mock('react-redux'); // <rootdir>/app/__mocks__/react-redux.js

/* Unmock HomeScreen for unit testing */
jest.unmock('../HomeScreen.js');
import HomeScreen from '../HomeScreen.js';

/* Create mock function to pass in as prop for testing */
const joinRandomGame = jest.genMockFunction();

describe('HomeScreen', () => {
  let output;

  beforeEach(() => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<HomeScreen onJoinRandomGame={joinRandomGame} />);
    output = renderer.getRenderOutput();
  });

  afterEach(() => {
    output = undefined;
  });

  xit('should render', () => {
    expect(output).toBeDefined();
  });

  xit('should have a "Join Random Game" button', () => {
    expect(() => { findWithType(output, Button); }).not.toThrow();
  });

  xit('should have an onPress event', () => {
    const joinButton = findWithType(output, Button);
    joinButton.props.onPress();
    expect(joinRandomGame).toBeCalled();
  });
});
