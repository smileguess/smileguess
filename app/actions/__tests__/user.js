jest.unmock('../user.js');
import { sendGuess, sendClue } from '../user.js';
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

describe('sendGuess Action Creator', () => {
  it('should be a function', () => {
    expect(typeof sendGuess).toEqual('function');
  });
  it('should return an object', () => {
    expect(typeof sendGuess({ body: 'This is a guess' })).toEqual('object');
  });
  it('should have a type property of SUBMIT_GUESS', () => {
    expect(sendGuess({ body: 'This is a guess' }).type).toEqual(SEND_GUESS_MESSAGE);
  });
  it('should have a payload property of passed in payload', () => {
    expect(sendGuess({ body: 'This is a guess' }).payload.body).toEqual('This is a guess');
  });
});

describe('sendClue Action Creator', () => {
  it('should be a function', () => {
    expect(typeof sendClue).toEqual('function');
  });
  it('should return an object', () => {
    expect(typeof sendClue(6, 'leaf')).toEqual('object');
  });
  it('should have a type property of SEND_CLUE_MESSAGE', () => {
    expect(sendClue(6, 'leaf').type).toEqual(SEND_CLUE_MESSAGE);
  });
  it('should have a hint property of passed in hint', () => {
    expect(sendClue(6, 'leaf').message).toEqual('leaf');
  });
});
