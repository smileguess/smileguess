import { GAME_MEMO } from '../action_types/actionTypes.js';

export default function reducer(state = { scene: { notifications: [] } }, action = {}) {
  let newScene;

  switch (action.type) {
    case 'focus':
    const notifications = Array.prototype.slice.apply(state.scene.notifications);
    newScene = action.scene;
    newScene.notifications = notifications;
      return {
        ...state,
        scene: newScene,
      };
    case GAME_MEMO:
      const newNotificaitons = state.scene.notifications.concat([action.payload]);
      newScene = Object.assign({}, state.scene, {
        notifications: newNotifications
      });
      return {
        ...state,
        scene: newScene,
      };
    default:
      return state;
  }
}
