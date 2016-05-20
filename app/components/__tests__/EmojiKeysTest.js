/* Import Test Utils */
import TestUtils from 'react-addons-test-utils';
import { findAllWithType, findWithClass } from 'react-shallow-testutils';

/* Import Mocks for Testing */
import React, { TouchableHighlight } from 'react-native'; // <rootdir>/app/__mocks__/react-native.js

/* Must be mocked explicitly because set as an unmocked module in package.json */
jest.mock('react-redux'); // <rootdir>/app/__mocks__/react-redux.js
jest.mock('image!emojis');

const mockUpdateInput = jest.genMockFunction();

const mockEmojiData = [
  {
    sheet_x: 5,
    sheet_y: 5,
  },
];

/* Unmock PlayerInput for unit testing */
jest.unmock('../EmojiKeys.js');
import EmojiKeys from '../EmojiKeys.js';

/* Create mock function to pass in as prop for testing */
/**
describe('EmojiKeys', () => {
  let output;

  beforeEach(() => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<EmojiKeys updateInput={mockUpdateInput} emojiData={mockEmojiData} />);
    output = renderer.getRenderOutput();
  });

  afterEach(() => {
    output = undefined;
  });

  it('should render', () => {
    expect(output).toBeDefined();
  });

  it('should have a "TouchableHighlight" component', () => {
    expect(() => { findAllWithType(output, TouchableHighlight); }).not.toThrow();
    expect(findAllWithType(output, TouchableHighlight).length > 0).toBeTruthy();
  });

  it('should have an onPress event', () => {
    const touchableHighlight = findWithClass(output, 'emojiButton');
    touchableHighlight.props.onPress({ nativeEvent: {} });
    expect(mockUpdateInput).toBeCalled();
  });
});
*/
