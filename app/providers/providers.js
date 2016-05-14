/* Import Actions */
import { submitGuess, dequeueMemo } from '../actions/user.js';
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
    return {
      messages: state.messages,
    };
  },
  mapDispatchToProps(dispatch) {
    return {
      onSubmitGuess: (message) => {
        /**
         * TODO: remove hardcoded userid
         */
        dispatch(submitGuess(6, message));
      },
    };
  },
};

/* CustomNav Providers */
export const mapCustomNav = {
  mapStateToProps(state) {
    return {
      notifications: state.routes.scene.notifications,
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

/* mapStatsScreen below is built out with dummy data
in the same format as player data is expected to come in.
This has been done for testing purposes.

Once player data and functionality has been finalised,
playerStats below will be replaced as follows:
  mapStateToProps(state) {
    return {
      playerStats: state.players.byId.map(id => state.players.all[id]),
    };
  },
*/

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

/* mapDealerPrompt below is built out with dummy data
in the same format as game data is expected to come in.
This has been done for testing purposes.
See comments inside mapStateToProps function for more detail
as to how function will need to be modified once we have
data coming from the server
*/
const game = {
  dealerid: 5,
  prompt: 'Like Water for Chocolate',
  category: 'Movies',
  initialClue: '👽🏰🎍',
};

/* DealerPrompt Providers*/
export const mapDealerPrompt = {
  mapStateToProps() {
    return {
      // Code below needs to be replaced as outlined
      // there is integratin with state
      // line 113 becomes: mapStateToProps(state) {
      // line 119 becomes: prompt: state.game.prompt,
      prompt: game.prompt,
    };
  },
  mapDispatchToProps() {
    return {};
  },
};
