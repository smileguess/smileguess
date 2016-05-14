/* Import Test Utils */
import TestUtils from 'react-addons-test-utils';
import { findWithType } from 'react-shallow-testutils';

/* Import Mocks for Testing */
import React, { TextInput } from 'react-native'; // <rootdir>/app/__mocks__/react-native.js

/* Must be mocked explicitly because set as an unmocked module in package.json */
jest.mock('react-redux'); // <rootdir>/app/__mocks__/react-redux.js

/* Unmock PlayerInput for unit testing */
jest.unmock('../PlayerInput.js');
import PlayerInput from '../PlayerInput.js';

/* Create mock function to pass in as prop for testing */
const submitGuess = jest.genMockFunction();
const onFocus = jest.genMockFunction();

/* Setup mock data */
const screenSize = {
  width: 300,
  height: 600,
};

describe('PlayerInput', () => {
  let output;

  beforeEach(() => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<PlayerInput
      onSend={submitGuess}
      onFocus={onFocus}
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

  it('should have a "TextInput" component', () => {
    expect(() => { findWithType(output, TextInput); }).not.toThrow();
  });

  it('should have an onSubmitEditing event', () => {
    const textInput = findWithType(output, TextInput);
    textInput.props.onSubmitEditing({ nativeEvent: {} });
    expect(submitGuess).toBeCalled();
  });
});
