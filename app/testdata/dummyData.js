const fakeMessages = {
  5: {
    userId: 2,
    type: 'guess',
    message: 'Blarney Stone',
  },
  4: {
    userId: 0,
    type: 'system',
    message: 'Sylvia won the round!',
  },
  3: {
    userId: 0,
    type: 'system',
    message: 'Brandon won the game!',
  },
  2: {
    userId: 1,
    type: 'guess',
    message: 'Emerald',
  },
  1: {
    userId: 2,
    type: 'guess',
    message: 'Is it a green rock?',
  },
  0: {
    userId: 3,
    type: 'clue',
    message: '',
  },
};

export const makeFakeMessageAdder = function makeFakeMessageAdder() {
  let id = 0;

  const fakeMessageAdder = function fakeMessageAdder() {
    const fakeIndex = Math.floor(Math.random() * 5);
    const fakeMessage = fakeMessages[fakeIndex];
    fakeMessage.id = id++;
    fakeMessage.time = Date.now();
    return {
      type: 'ADD_MESSAGE',
      payload: fakeMessage,
    };
  };

  return fakeMessageAdder;
};

export const fakeGameUpdate = {
  type: 'UPDATE_GAME_STATE',
  payload: {
    id: 1,
    players: {
      all: {
        1: {
          id: 1, // unique user id
          username: 'bob', // username
          points: 555, // points in current game
          wins: 3, // wins in current game
          emojicoins: 3, // total number of emojicoins across games
          picture: 'http://static1.squarespace.com/static/5018d08ae4b0a463fb2fc659/t/546175abe4b011fe10901497/1418889965591/?format=1500w', // user profile pic
        },
        2: {
          id: 2, // unique user id
          username: 'kelly', // username
          points: 565, // points in current game
          wins: 3, // wins in current game
          emojicoins: 3, // total number of emojicoins across games
          picture: 'http://25.media.tumblr.com/ddba265a8e1538d5db940f2e3c95c8ad/tumblr_n1gqwc5egi1qhcd6po1_500.gif', // user profile pic
        },
        3: {
          id: 3, // unique user id
          username: 'sally', // username
          points: 574, // points in current game
          wins: 3, // wins in current game
          emojicoins: 3, // total number of emojicoins across games
          picture: 'https://lh3.googleusercontent.com/715fgXULvZkvaSfJ4G7D4TvFYcGEK2sPO0NosMh9IyD7LbXq9WqhCElbS46bDmjNXQ=w300', // user profile pic
        },
      },
      byId: [1, 2, 3],
    },
    dealerId: 3,
    prompt: {
      category: 'Movies',
      forDisplay: 'Avengers',
    },
    active: false,
  },
};

export const fakeGameCreator = () => fakeGameUpdate;

export const fakeUser = {
  id: 5, // unique user id
  username: 'bob', // username
  points: 555, // points in current game
  wins: 3, // wins in current game
  emojicoins: 3, // total number of emojicoins across games
  picture: 'http://cdn.photonesta.com/image.png', // user profile pic
};
