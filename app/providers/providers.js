/* Import Actions */
import { sendGuess, sendClue, dequeueMemo } from '../actions/user.js';
import { Actions } from 'react-native-router-flux';


/* Home Screen Providers*/
export const mapHomeScreen = {
  mapStateToProps() {
    return {};
  },
  mapDispatchToProps(dispatch) {
    return {
      onJoinRandomGame: () => {
        dispatch(() => {
          Actions.showGameScreen();
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
