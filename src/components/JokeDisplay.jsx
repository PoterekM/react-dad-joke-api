import React from "react";
import { connect } from "react-redux";


const JokeDisplay = ({ dispatch, joke }) => {
  console.log(joke)
  return (
    <div>
      <h1>{joke.joke}</h1>
    </div>
  )
}


const mapStateToProps = state => {
  console.log(state);
  const joke = state;
  return {
    joke: joke,
  };
};


export default connect(mapStateToProps)(JokeDisplay);
