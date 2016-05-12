/**
 * Server->Client: sent from the server when the dealer sends a clue message
 */
export const SOCKET_CLUE_MESSAGE = 'SOCKET_CLUE_MESSAGE';
/**
 * Server->Client: sent from the server when a player sends a guess message
 */
export const SOCKET_GUESS_MESSAGE = 'SOCKET_GUESS_MESSAGE';
/**
 * Server->Client: sent from the server when a winner is declared
 */
export const SOCKET_DECLARE_WINNER = 'SOCKET_DECLARE_WINNER';
/**
 * Server->Client: sent from the server when a player joins in on the current game
 */
export const SOCKET_PLAYER_JOIN_GAME = 'SOCKET_PLAYER_JOIN_GAME';
/**
 * Server->Client: sent from the server when a player leaves the current game
 */
export const SOCKET_PLAYER_LEAVE_GAME = 'SOCKET_PLAYER_LEAVE_GAME';
/**
 * Server->Client: dealer receives prompt from the server
 */
export const SOCKET_DEALER_RECEIVE_PROMPT = 'SOCKET_DEALER_RECEIVE_PROMPT';
/**
 * Server->Client->Client: fetch the user associated with the deviceid from an api endpoint
 */
export const UPDATE_USER_STATE = 'UPDATE_USER_STATE';

/**
 * Client->Server: sent to server when the client wants to broadcast a guess
 */
export const SEND_GUESS_MESSAGE = 'server/sendGuessMessage';
/**
 * Client->Server: sent to server when the dealer wants to broadcast a clue
 */
export const SEND_CLUE_MESSAGE = 'server/sendClueMessage';
/**
 * Client->Server: sent to server when the player wants to join a random game
 */
export const JOIN_RANDOM_GAME = 'server/joinRandomGame';
/**
 * Client->Server: sent to server when the player wants to join a specific game by ID
 */
export const JOIN_GAME = 'server/joinGame';
