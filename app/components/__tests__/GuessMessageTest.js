/* Import Test Utils */
import TestUtils from 'react-addons-test-utils';
import { findWithType } from 'react-shallow-testutils';

/* Import Mocks for Testing */
import React, { Text } from 'react-native'; // <rootdir>/app/__mocks__/react-native.js

/* Setup Test Data */
const fakeMessage = {
  id: 5,
  time: 123456,
  userId: 1,
  type: 'winner',
  message: 'Sylvia won the round!',
};

const fakePlayers = {
  all: {
    1: {
      id: 5, // unique user id
      username: 'bob', // username
      points: 555, // points in current game
      wins: 3, // wins in current game
      emojicoins: 3, // total number of emojicoins across games
      picture: 'http://cdn.photonesta.com/image.png', // user profile pic
    },
  },
};


/* Must be mocked explicitly because set as an unmocked module in package.json */
jest.mock('react-redux'); // <rootdir>/app/__mocks__/react-redux.js

/* Unmock GuessMessage for unit testing */
jest.unmock('../GuessMessage.js');
import GuessMessage from '../GuessMessage.js';

describe('GuessMessage', () => {
  let output;

  beforeEach(() => {
    const renderer = TestUtils.createRenderer();
    renderer.render(
      <GuessMessage
        message={fakeMessage.message}
        userId={fakeMessage.userId}
        currentUser={{ id: 1 }}
        players={fakePlayers}
        screenSize={{ height: 600, width: 300 }}
      />
    );
    output = renderer.getRenderOutput();
  });

  afterEach(() => {
    output = undefined;
  });

  it('should render', () => {
    expect(output).toBeDefined();
  });
});
