import {
  SEND_CLUE_MESSAGE,
  SEND_GUESS_MESSAGE,
  DEQUEUE_GAME_MEMO,
  JOIN_GAME,
  LEAVE_GAME,
} from '../action_types/actionTypes.js';

/**
 * Creates an action for submitting a guess to the server
 * This action is handled by the server
 */
export const sendGuess = (payload) => ({
  type: SEND_GUESS_MESSAGE,
  payload,
});

/**
 * This creates an action for the dealer to submit a clue
 * This action is handeled by the server
 */
export const sendClue = (payload) => ({
  type: SEND_CLUE_MESSAGE,
  payload,
});

/**
 * This creates an action which removes a memo from the notifications
 * queue once it has been dismissed by the user.
 */
export const dequeueMemo = () => ({
  type: DEQUEUE_GAME_MEMO,
});

/**
 * This creates an action which joins the user to a game room
 */
export const joinGame = (payload) => ({
  type: JOIN_GAME,
  payload,
});

/**
 * This creates an action which leaves a user from a game room
 */
export const leaveGame = (payload) => ({
  type: LEAVE_GAME,
  payload,
});
