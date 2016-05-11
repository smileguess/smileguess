/* Import Test Utils */
import TestUtils from 'react-addons-test-utils';

/* Import Mocks for Testing */
import React from 'react-native'; // <rootdir>/app/__mocks__/react-native.js
import DealerPrompt from '../DealerPrompt.js';

/* Setup Test Data */
const game = {
  dealerid: 5,
  prompt: 'Like Water for Chocolate',
  category: 'Movies',
  initialClue: '👽🏰🎍',
};

/* Must be mocked explicitly because set as an unmocked module in package.json */
jest.mock('react-redux'); // <rootdir>/app/__mocks__/react-redux.js
/* Unmock DealerPrompt for unit testing */
jest.unmock('../DealerPrompt.js');

describe('DealerPrompt', () => {
  let output;

  beforeEach(() => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<DealerPrompt prompt={game.prompt} />);
    output = renderer.getRenderOutput();
  });

  afterEach(() => {
    output = undefined;
  });

  it('should render', () => {
    expect(output).toBeDefined();
  });
});
