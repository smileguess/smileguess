import { combineReducers } from 'redux';
import messages from './messages.js';
import game from './game.js';
import routes from './routes.js';
import user from './user.js';
import memos from './memos.js';

const rootReducer = combineReducers({
  messages,
  game,
  routes,
  user,
  memos,
});

export default rootReducer;
