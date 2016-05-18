/* Configure Store */

/* Import Dependencies */
import { createStore, applyMiddleware, compose } from 'redux';
import config from '../utils/config.js';

/* Import Reducer */
import rootReducer from '../reducers/index.js';

/* Import Middleware */
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';

/* socket.io assumes navigator.userAgent is a string, supply a dummy one to make it happy
 * and because ES6 module imports are hoisted, we can't make the userAgent assignment
 * in the same file as the react-native and socket.io imports
 */
import './UserAgent';
import io from 'socket.io-client/socket.io';
const socket = io.connect(config.serverUrl, {
  jsonp: false,
  transports: ['websocket'],
});
import createSocketIoMiddleware from 'redux-socket.io';
const socketIoMiddleware = createSocketIoMiddleware(socket, 'server/');

export default function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(thunk, socketIoMiddleware),
    devTools({
      name: 'Smile Guess',
      realtime: true,
      hostname: 'localhost',
      port: 8000,
    })
  );
  return createStore(rootReducer, initialState, enhancer);
}
