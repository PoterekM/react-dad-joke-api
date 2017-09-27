import constants from "./../constants";
const { defaultState, types } = constants;



const jokesByJoke = (state = defaultState, action) => {
  let joke;
  let newJoke;
  let newState;
  let searchWord;
  switch (action.type) {
    case types.REQUEST_JOKE:
    newJoke = {
      isFetching: true,
      searchWord: action.searchWord,
    };
    newState = Object.assign({}, state, {
      // [action.joke]: newJoke
      [action.joke]: newJoke
    });
    return newState;

    case types.SHOW_JOKE:
    joke = state[action.joke];
    newJoke = Object.assign({}, joke, {
      isFetching: false,
      joke: action.joke,
    });
      return newJoke;
    default:
      return state;
  }
}


export default jokesByJoke;
