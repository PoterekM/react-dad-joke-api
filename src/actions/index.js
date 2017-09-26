import * as types from "./../constants/ActionTypes";


export function fetchJoke(searchWord) {
  return function (dispatch) {
    searchWord = searchWord.replace(" ", "_");
    return fetch("https://icanhazdadjoke.com/search?term=" + searchWord).
    then(
      response => response.json(),
      error => console.log("This is an error message you've created in your index.js file", error)
    ).then(function(json) {
      if (json.results.joke > 0) {
        console.log("Yes, we've recieved a joke!");
      }
    })
  }
}
