jest.unmock('../user.js');
import { submitGuess, submitClue } from '../user.js';
import { SEND_GUESS_MESSAGE, SEND_CLUE_MESSAGE } from '../../action_types/actionTypes.js';

describe('User Action Types', () => {
  it('should have an action type SEND_GUESS_MESSAGE', () => {
    expect(SEND_GUESS_MESSAGE).toBeDefined();
    expect(SEND_GUESS_MESSAGE).toMatch('server/sendGuessMessage');
  });
  it('should have an action type SEND_CLUE_MESSAGE', () => {
    expect(SEND_CLUE_MESSAGE).toBeDefined();
    expect(SEND_CLUE_MESSAGE).toMatch('server/sendClueMessage');
  });
});

describe('submitGuess Action Creator', () => {
  it('should be a function', () => {
    expect(typeof submitGuess).toEqual('function');
  });
  it('should return an object', () => {
    expect(typeof submitGuess(6, 'tree')).toEqual('object');
  });
  it('should have a type property of SUBMIT_GUESS', () => {
    expect(submitGuess(6, 'tree').type).toEqual(SEND_GUESS_MESSAGE);
  });
  it('should have a guess property of passed in guess', () => {
    expect(submitGuess(6, 'tree').message).toEqual('tree');
  });
});

describe('submitClue Action Creator', () => {
  it('should be a function', () => {
    expect(typeof submitClue).toEqual('function');
  });
  it('should return an object', () => {
    expect(typeof submitClue(6, 'leaf')).toEqual('object');
  });
  it('should have a type property of SEND_CLUE_MESSAGE', () => {
    expect(submitClue(6, 'leaf').type).toEqual(SEND_CLUE_MESSAGE);
  });
  it('should have a hint property of passed in hint', () => {
    expect(submitClue(6, 'leaf').message).toEqual('leaf');
  });
});
