/* Import Test Utils */
import TestUtils from 'react-addons-test-utils';

/* Import Mocks for Testing */
import React from 'react-native'; // <rootdir>/app/__mocks__/react-native.js

/* Must be mocked explicitly because set as an unmocked module in package.json */
jest.mock('react-redux'); // <rootdir>/app/__mocks__/react-redux.js

/* Unmock HomeScreen for unit testing */
import DealerChangeScreen from '../DealerChangeScreen.js';
jest.unmock('../DealerChangeScreen.js');

describe('DealerChangeScreen', () => {
  let output;

  beforeEach(() => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<DealerChangeScreen />);
    output = renderer.getRenderOutput();
  });

  afterEach(() => {
    output = undefined;
  });

  it('should render', () => {
    expect(output).toBeDefined();
  });
});

