/* Import Test Utils */
import TestUtils from 'react-addons-test-utils';
import { findAllWithType } from 'react-shallow-testutils';

/* Import Mocks for Testing */
import React, { Text } from 'react-native'; // <rootdir>/app/__mocks__/react-native.js

/* Must be mocked explicitly because set as an unmocked module in package.json */
jest.mock('react-redux'); // <rootdir>/app/__mocks__/react-redux.js
jest.mock('react-native-blur');
import BlurView from 'react-native-blur';

/* Unmock Toast for unit testing */
jest.unmock('../Toast.js');
import Toast from '../Toast.js';

/* Set up mock data */
const screenSize = {
  width: 300,
  height: 600,
};

describe('Toast', () => {
  let output;

  beforeEach(() => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Toast
      toastMessage="Player has won!"
      screenSize={screenSize}
    />);
    output = renderer.getRenderOutput();
  });

  afterEach(() => {
    output = undefined;
  });

  it('should render', () => {
    expect(output).toBeDefined();
  });

  xit('should have a Text component', () => {
    expect(findAllWithType(output, BlurView)).toBe(2);
  });
});
