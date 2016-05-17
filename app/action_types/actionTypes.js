/**
 * Server->Client: integrates `action.payload` into the message part of the store
 */
export const ADD_MESSAGE = 'ADD_MESSAGE';
/**
 * Server->Client: integrates `action.payload` into the user part of the store
 */
export const UPDATE_USER_STATE = 'UPDATE_USER_STATE';
/**
 * Server->Client: integrates `action.payload` into the game part of the store
 */
export const UPDATE_GAME_STATE = 'UPDATE_GAME_STATE';
/**
 * Server->Client: conveys a game event to be displayed to the user
 * in the ui and/or as a notification.
 */
export const GAME_MEMO = 'GAME_MEMO';

/**
 * Client->Server: sent to server when the client wants to broadcast a guess
 */
export const SEND_GUESS_MESSAGE = 'server/sendMessage';
/**
 * Client->Server: sent to server when the dealer wants to broadcast a clue
 */
export const SEND_CLUE_MESSAGE = 'server/sendMessage';

/**
 * Client->Client: Indicates that the user has read the most recent notificaiton.
 */
export const DEQUEUE_GAME_MEMO = 'DEQUEUE_GAME_MEMO';
