/* Import Actions */
import { sendGuess, sendClue, dequeueMemo } from '../actions/user.js';
import { Actions } from 'react-native-router-flux';
import config from '../utils/config.js'


/* Home Screen Providers*/
export const mapHomeScreen = {
  mapStateToProps() {
    return {};
  },
  mapDispatchToProps(dispatch) {
    return {
      onJoinRandomGame: () => {
        dispatch((dispatch, getState) => {
          const fetchGame = () => {
            fetch(`${config.serverUrl}/api/game/`)
            .then((res) => {
              if (!res.ok) {
                throw error;
              }
              return res;
            })
            .then((res) => res.json())
            .then((game) => {
              if (game) {
                dispatch({
                  type: 'UPDATE_GAME_STATE',
                  payload: game,
                });
                dispatch({
                  type: 'server/joinGame',
                  userId: getState().user.id,
                  gameId: getState().game.id,
                });
                Actions.showGameScreen();
              } else {
                setTimeout(fetchGame, 501);
              }
            })
            .catch((error) => {
              console.warn('Check for game again in 501ms');
              console.warn('fetch: ', error.message);
              setTimeout(fetchGame, 501);
            }); // End Fetch Promise Block
          }; // End fetchGame function
          fetchGame();
        });
      },
      onJoinGame: () => {
        dispatch(() => {
          Actions.showGameScreen();
        });
      },
    };
  },
};

/* Game Screen Providers*/
export const mapGameScreen = {
  mapStateToProps(state) {
    const isDealer = state.game.dealerId === state.user.id;
    return {
      messages: state.messages,
      isDealer,
      dealerPrompt: state.game.prompt.forDisplay,
      category: state.game.prompt.category,
      hintForDisplay: state.game.prompt.hintForDisplay,
      players: state.game.players,
      user: state.user,
      game: state.game,
    };
  },
  mapDispatchToProps(dispatch) {
    return {
      onSendGuess: (payload) => {
        /**
         * TODO: remove hardcoded userid
         */
        dispatch(sendGuess(payload));
      },
      onSendClue: (payload) => {
        /**
         * TODO: remove hardcoded userid
         */
        dispatch(sendClue(payload));
      },
    };
  },
};

/* CustomNav Providers */
export const mapCustomNav = {
  mapStateToProps(state) {
    return {
      notifications: state.memos,
    };
  },
  mapDispatchToProps(dispatch) {
    return {
      dequeueMemo: () => {
        dispatch(dequeueMemo());
      },
      timeoutToast: () => {
        setTimeout(() => {
          dispatch(dequeueMemo());
        }, 10000);
      }
    };
  },
};

/* Stats Screen Providers*/
export const mapStatsScreen = {
  mapStateToProps(state) {
    return {
      playerStats: state.game.players.byId.map(id => state.game.players.all[id]),
    };
  },
  mapDispatchToProps() {
    return {};
  },
};
