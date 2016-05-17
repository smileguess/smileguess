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
  type: 'clue',
  body: [[0, 27], [1, 5], [1, 15]],
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

/* Unmock ClueMessage for unit testing */
jest.unmock('../ClueMessage.js');
import ClueMessage from '../ClueMessage.js';

describe('ClueMessage', () => {
  let output;

  beforeEach(() => {
    const renderer = TestUtils.createRenderer();
    renderer.render(
      <ClueMessage
        body={fakeMessage.body}
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
