import React from "react";
import { fetchJoke } from "./../actions";
import { connect } from "react-redux";

class JokeSearch extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let { _searchWord } = this.refs;
    if (!_searchWord.value.trim()) {
      return;
    }
    this.props.dispatch(fetchJoke(_searchWord.value.trim()));
    console.log(_searchWord.value);
    // _searchWord.value = "";
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Search a joke by word!" ref="_searchWord"></input>
          <button>search</button>
        </form>
      </div>
    )
  }
}

export default connect()(JokeSearch);
