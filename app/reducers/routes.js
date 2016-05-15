export default function reducer(state = { scene: {} }, action = {}) {

  switch (action.type) {
    case 'focus':
      return {
        ...state,
        scene: action.scene,
      };
    default:
      return state;
  }
}
