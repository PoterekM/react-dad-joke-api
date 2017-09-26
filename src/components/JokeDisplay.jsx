import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";


const JokeDisplay = ({ dispatch, joke }) => {
  return (
    <div>
      <h1>{joke}</h1>
    </div>
  )
}

JokeDisplay.propTypes = {
  joke: PropTypes.object
};

const mapStateToProps = state => {
  console.log(state);
  const joke = state;
  return {
    joke: joke
  };
};


export default connect(mapStateToProps)(JokeDisplay);
