import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";


const JokeDisplay = ({ dispatch, joke }) => {
  <div>
    <h1>"{joke}"</h1>
    <h1>{joke}</h1>
  </div>
  return (
    <div>
      <h1>Hello</h1>
      <h1>{joke}</h1>
    </div>

  )
}
JokeDisplay.propTypes = {
  joke: PropTypes.array
};

const mapStateToProps = state => {
  console.log(state);
  const joke = state;
  return {
    joke: joke
  };
};


export default connect(mapStateToProps)(JokeDisplay);
