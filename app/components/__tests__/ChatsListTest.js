/* Import Test Utils */
import TestUtils from 'react-addons-test-utils';
import { findAllWithType } from 'react-shallow-testutils';

/* Import Mocks for Testing */
import React from 'react-native'; // <rootdir>/app/__mocks__/react-native.js
import GuessMessage from '../GuessMessage.js';

/* Setup Test Data */
const fakeMessages = [
  {
    userid: 1,
    type: 'guess',
    message: 'I dont know.',
  },
  {
    userid: 2,
    type: 'guess',
    message: 'I dont know.',
  },
  {
    userid: 3,
    type: 'clue',
    message: 'I dont know.',
  },
  {
    userid: 4,
    type: 'guess',
    message: 'I dont know.',
  },
  {
    userid: 1,
    type: 'guess',
    message: 'I dont know.',
  },
];

/* Must be mocked explicitly because set as an unmocked module in package.json */
jest.mock('react-redux'); // <rootdir>/app/__mocks__/react-redux.js

/* Unmock ChatsList for unit testing */
jest.unmock('../ChatsList.js');
import ChatsList from '../ChatsList.js';

describe('ChatsList', () => {
  let output;

  beforeEach(() => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<ChatsList
      messages={fakeMessages}
    />);
    output = renderer.getRenderOutput();
  });

  afterEach(() => {
    output = undefined;
  });

  it('should render', () => {
    expect(output).toBeDefined();
  });

  xit('should have child Messages', () => {
    const messages = findAllWithType(output, GuessMessage);
    expect(messages.length).toBe(5);
  });
});
