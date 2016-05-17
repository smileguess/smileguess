import {
  SEND_CLUE_MESSAGE,
  SEND_GUESS_MESSAGE,
  DEQUEUE_GAME_MEMO,
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
export const sendClue = (userid, message) => ({
  type: SEND_CLUE_MESSAGE,
  userid,
  message,
});

/**
 * This creates an action which removes a memo from the notifications
 * queue once it has been dismissed by the user.
 */
export const dequeueMemo = () => ({
  type: DEQUEUE_GAME_MEMO,
});
