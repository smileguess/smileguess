# SmileGuess
Emoji guessing game

## Environment Setup

Instructions for setting up your react-native development environment:

https://facebook.github.io/react-native/docs/getting-started.html

Install Dependencies
```bash
npm install -g rnpm //sudo may be required for this
rnpm link
```

Once your development environment is set up, start the ios emulator with `react-native run-ios`

Our server code is in another repo:
https://github.com/smileguess/smileguess-server

## State Diagram

```javascript
let sampleState = {
  // This should be a singular object with the users properties
  user: { 
    id: 5, // unique user id
    username: 'bob', // username
    points: 555, // points in current game
    wins: 3, // wins in current game
    emojicoins: 3, // total number of emojicoins across games
    picture: 'http://cdn.photonesta.com/image.png', // user profile pic
  },

  /* There is one part of the store for holding game information.  This is so
   * that updates from the server to this part of the store can happen in a simple way.
   * The server will have pre-configured an action to be integrated wholesale into the store.
   */
  game: {
    /* There are two keys in the players portion of the store:
     * - players.all: This is an object where the userids map to key/value objects
     *   which represent players in the current game.
     * - players.byId: This is an array of ids of all the users in the game.
     */
    players: {
      all: { 1: userObj, 2: userObj, 3: userObj },
      byId: ['1', '2', '3'],
    },
    dealerId: 3,
    prompt: 'Avengers',
    category: 'Movie',
    initialClue: '[Emojies...]',
    state: 'waiting for dealer',
  },

  /* This part of the state is for toast and other messages that are being displayed.
   * They are removed from the store when the player dismisses them.
   */
  notifications: {
    queue: [messageObj, messageObj, ...],
  },

  /* Similar to the players, there are two keys in the players portion of the store:
   * - messages.all: This is an object where the messageIds map to key/value objects
   *   which represent messages.
   * - messages.byId: This is an array of ids of all the messages in the game.
   */
  messages: {
    all: [
      { id: 5, time: 123456, userId: 0, type: 'winner', winnerId: 1 },
      { id: 4, time: 123455, userId: 1, type: 'guess', message: 'Home Alone' },
      { id: 3, time: 123454, userId: 3, type: 'clue', message: '[Emojies...]' },
      { id: 2, time: 123446, userId: 2, type: 'guess', message: 'SpIderman' },
      { id: 1, time: 123443, userId: 1, type: 'guess', message: 'The Avengers' },
    ],
    byId: [id, id, id, id, id],
  },

  /* This is an object required by react-native-router-flux. It contains 
   * relevant 'scenes' which are represented by screens*/
  routes: { scene },
};
```

## Documentation

Documenation about our methods can be found at the following URLs:

https://smileguess.github.io/smileguess/

https://smileguess.github.io/smileguess-server/

## Tech Stack

1.  React-Native
2.  Redux
3.  socket.io
