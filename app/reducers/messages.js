import { ADD_MESSAGE } from '../action_types/actionTypes.js';

export default (state = [], action = {}) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return [...state, action.payload];
    default:
      return state;
  }
};
