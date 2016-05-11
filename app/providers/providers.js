/* Import Actions */
import { joinGame, joinRandomGame, submitGuess } from '../actions/user.js';
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
          dispatch(joinRandomGame());
          Actions.showGameScreen();
        });
      },
      onJoinGame: (id) => {
        dispatch(() => {
          dispatch(joinGame(id));
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

const playersById = ['11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];
const playersObj = {
  11: { username: 'Will', points: 555, wins: 3, emojicoins: 3, picture: { thumbnail: 'http://cdn.photonesta.com/images/data.whicdn.com/images/127977939/original.png' } },
  12: { username: 'Travis', points: 444, wins: 4, emojicoins: 4, picture: { thumbnail: 'http://static1.squarespace.com/static/5018d08ae4b0a463fb2fc659/t/546175abe4b011fe10901497/1418889965591/?format=1500w' } },
  13: { username: 'Brandon', points: 444, wins: 5, emojicoins: 6, picture: { thumbnail: 'http://25.media.tumblr.com/ddba265a8e1538d5db940f2e3c95c8ad/tumblr_n1gqwc5egi1qhcd6po1_500.gif' } },
  14: { username: 'Sylvia', points: 444, wins: 10, emojicoins: 10, picture: { thumbnail: 'https://lh3.googleusercontent.com/715fgXULvZkvaSfJ4G7D4TvFYcGEK2sPO0NosMh9IyD7LbXq9WqhCElbS46bDmjNXQ=w300' } },
  15: { username: 'Will', points: 555, wins: 3, emojicoins: 3, picture: { thumbnail: 'http://cdn.photonesta.com/images/data.whicdn.com/images/127977939/original.png' } },
  16: { username: 'Travis', points: 444, wins: 4, emojicoins: 4, picture: { thumbnail: 'http://static1.squarespace.com/static/5018d08ae4b0a463fb2fc659/t/546175abe4b011fe10901497/1418889965591/?format=1500w' } },
  17: { username: 'Brandon', points: 444, wins: 5, emojicoins: 6, picture: { thumbnail: 'http://25.media.tumblr.com/ddba265a8e1538d5db940f2e3c95c8ad/tumblr_n1gqwc5egi1qhcd6po1_500.gif' } },
  18: { username: 'Sylvia', points: 444, wins: 10, emojicoins: 10, picture: { thumbnail: 'https://lh3.googleusercontent.com/715fgXULvZkvaSfJ4G7D4TvFYcGEK2sPO0NosMh9IyD7LbXq9WqhCElbS46bDmjNXQ=w300' } },
  19: { username: 'Will', points: 555, wins: 3, emojicoins: 3, picture: { thumbnail: 'http://cdn.photonesta.com/images/data.whicdn.com/images/127977939/original.png' } },
  20: { username: 'Travis', points: 444, wins: 4, emojicoins: 4, picture: { thumbnail: 'http://static1.squarespace.com/static/5018d08ae4b0a463fb2fc659/t/546175abe4b011fe10901497/1418889965591/?format=1500w' } },
  21: { username: 'Brandon', points: 444, wins: 5, emojicoins: 6, picture: { thumbnail: 'http://25.media.tumblr.com/ddba265a8e1538d5db940f2e3c95c8ad/tumblr_n1gqwc5egi1qhcd6po1_500.gif' } },
  22: { username: 'Sylvia', points: 444, wins: 10, emojicoins: 10, picture: { thumbnail: 'https://lh3.googleusercontent.com/715fgXULvZkvaSfJ4G7D4TvFYcGEK2sPO0NosMh9IyD7LbXq9WqhCElbS46bDmjNXQ=w300' } },
  23: { username: 'Will', points: 555, wins: 3, emojicoins: 3, picture: { thumbnail: 'http://cdn.photonesta.com/images/data.whicdn.com/images/127977939/original.png' } },
  24: { username: 'Travis', points: 444, wins: 4, emojicoins: 4, picture: { thumbnail: 'http://static1.squarespace.com/static/5018d08ae4b0a463fb2fc659/t/546175abe4b011fe10901497/1418889965591/?format=1500w' } },
  25: { username: 'Brandon', points: 444, wins: 5, emojicoins: 6, picture: { thumbnail: 'http://25.media.tumblr.com/ddba265a8e1538d5db940f2e3c95c8ad/tumblr_n1gqwc5egi1qhcd6po1_500.gif' } },
  26: { username: 'Sylvia', points: 444, wins: 10, emojicoins: 10, picture: { thumbnail: 'https://lh3.googleusercontent.com/715fgXULvZkvaSfJ4G7D4TvFYcGEK2sPO0NosMh9IyD7LbXq9WqhCElbS46bDmjNXQ=w300' } },
  27: { username: 'Will', points: 555, wins: 3, emojicoins: 3, picture: { thumbnail: 'http://cdn.photonesta.com/images/data.whicdn.com/images/127977939/original.png' } },
  28: { username: 'Travis', points: 444, wins: 4, emojicoins: 4, picture: { thumbnail: 'http://static1.squarespace.com/static/5018d08ae4b0a463fb2fc659/t/546175abe4b011fe10901497/1418889965591/?format=1500w' } },
  29: { username: 'Brandon', points: 444, wins: 5, emojicoins: 6, picture: { thumbnail: 'http://25.media.tumblr.com/ddba265a8e1538d5db940f2e3c95c8ad/tumblr_n1gqwc5egi1qhcd6po1_500.gif' } },
  30: { username: 'Sylvia', points: 444, wins: 10, emojicoins: 10, picture: { thumbnail: 'https://lh3.googleusercontent.com/715fgXULvZkvaSfJ4G7D4TvFYcGEK2sPO0NosMh9IyD7LbXq9WqhCElbS46bDmjNXQ=w300' } },
};
/* Stats Screen Providers*/
export const mapStatsScreen = {
  mapStateToProps() {
    return {
      playerStats: playersById.map(id => playersObj[id]),
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
