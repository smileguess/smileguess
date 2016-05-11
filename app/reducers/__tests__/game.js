jest.unmock('../game.js');
import gameReducer from '../game.js';
import { SOCKET_DEALER_RECEIVE_PROMPT } from '../../action_types/actionTypes.js';

const action = {
  dealerid: 5,
  prompt: 'Kill Bill',
  category: 'Movies',
  initialClue: '👽🏰🎍',
};

describe('game reducer', () => {
  it('should return the initial state', () => {
    expect(gameReducer(undefined, {})).toEqual({});
  });
  it('should handle SOCKET_DEALER_RECEIVE_PROMPT', () => {
    action.type = SOCKET_DEALER_RECEIVE_PROMPT;
    const newState = gameReducer({}, action);
    expect(typeof newState === 'object').toBe(true);
    expect(newState.dealerid).toEqual(5);
    expect(newState.prompt).toEqual('Kill Bill');
    expect(newState.category).toEqual('Movies');
    expect(newState.initialClue).toEqual('👽🏰🎍');
  });
});
