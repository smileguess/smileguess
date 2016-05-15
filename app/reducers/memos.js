import { GAME_MEMO, DEQUEUE_GAME_MEMO } from '../action_types/actionTypes.js';

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case GAME_MEMO:
      return state.concat([action.payload]);
    case DEQUEUE_GAME_MEMO:
      return state.slice(1);
    default:
      return state;
  }
}
