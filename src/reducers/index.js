import constants from "./../constants";
const { defaultState, types } = constants;

export default (state = [], action) => {
  let newJoke;
  let newState;
  switch (action.type) {
    case types.SHOW_JOKE:
      const { joke } = action;
      return [
        joke: joke
      ];
    case types.REQUEST_JOKE:
      newJoke = {
        isFetching: true,
        joke: action.joke
      };
      newState = Object.assign({}, state, {
        [action.joke]: newJoke
      });
      return newState;
    default:
      return state;
  }

}
