import * as types from "./../constants/ActionTypes";

export const showJoke = (joke) => ({
  type: types.SHOW_JOKE,
  joke
})

export const requestJoke = (searchWord) => ({
  type: types.REQUEST_JOKE,
  searchWord,
})

export function fetchJoke(searchWord) {
  console.log(searchWord);
  return function (dispatch) {
    dispatch(requestJoke(searchWord));
    console.log(searchWord);
    searchWord = searchWord.replace(" ", "%20");
    return fetch("https://icanhazdadjoke.com/search?term=" + searchWord + "&limit=1",
    {
      headers : {
        'Accept': 'application/json'
      }}).then(
      response => response.json(),
      error => console.log("This is an error message you've created in your index.js file", error)
    ).then(function(json) {
      if (json.total_jokes > 0) {
        const joke = json.results[0].joke
        console.log(joke);
        console.log(searchWord);
        dispatch(showJoke(joke));
      }else {
        console.log("Sorry, we're not creative enough to have a joke with *that* word in it...");

      }
    });
  };
}
