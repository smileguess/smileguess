import { UPDATE_USER_STATE } from '../action_types/actionTypes.js';

/**
 * This adds the user to the store upon starting the app
 */
export default (state = { id: 2 }, action = {}) => {
  switch (action.type) {
    case UPDATE_USER_STATE:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};
