/* Import Test Utils */
import TestUtils from 'react-addons-test-utils';
import { findAllWithType } from 'react-shallow-testutils';

/* Import Mocks for Testing */
import React, { Text } from 'react-native'; // <rootdir>/app/__mocks__/react-native.js

/* Must be mocked explicitly because set as an unmocked module in package.json */
jest.mock('react-redux'); // <rootdir>/app/__mocks__/react-redux.js
jest.mock('react-native-blur');

/* Unmock CustomNav for unit testing */
jest.unmock('../CustomNav.js');
import CustomNav from '../CustomNav.js';

/* Set up mock data */
const screenSize = {
  width: 300,
  height: 600,
};

describe('CustomNav', () => {
  let output;

  beforeEach(() => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<CustomNav
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
});
