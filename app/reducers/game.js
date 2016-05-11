import { SOCKET_DEALER_RECEIVE_PROMPT } from '../action_types/actionTypes.js';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case SOCKET_DEALER_RECEIVE_PROMPT:
      return Object.assign({}, state, {
        dealerid: action.dealerid,
        prompt: action.prompt,
        category: action.category,
        initialClue: action.initialClue,
      });
    default:
      return state;
  }
};
