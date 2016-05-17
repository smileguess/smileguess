/* Import Test Utils */
import TestUtils from 'react-addons-test-utils';
import { findWithType } from 'react-shallow-testutils';

/* Import Mocks for Testing */
import React from 'react-native'; // <rootdir>/app/__mocks__/react-native.js
import PlayerInput from '../../components/PlayerInput.js'; // Mocked automatically
/* Must be mocked explicitly because set as an unmocked module in package.json */
jest.mock('react-redux'); // <rootdir>/app/__mocks__/react-redux.js

/* Unmock GameScreen for unit testing */
jest.unmock('../GameScreen.js');
import GameScreen from '../GameScreen.js';

/* Create mock function to pass in as prop for testing */
const submitGuess = jest.genMockFunction();

/* Import Game Mock Data */
jest.unmock('../../testdata/dummyData.js');
import { fakeGameUpdate, fakeUser } from '../../testdata/dummyData.js';

/* Setup mock data */
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
  }];

describe('GameScreen', () => {
  let output;

  beforeEach(() => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<GameScreen
      onSubmitGuess={submitGuess}
      messages={fakeMessages}
      game={fakeGameUpdate}
      user={fakeUser}
    />);
    output = renderer.getRenderOutput();
  });

  afterEach(() => {
    output = undefined;
  });

  it('should render', () => {
    expect(output).toBeDefined();
  });

  it('should have a "Player Input" component', () => {
    expect(() => { findWithType(output, PlayerInput); }).not.toThrow();
  });
});
