import React from "react";
import Header from "./Header";
import JokeSearch from "./JokeSearch";
import JokeDisplay from "./JokeDisplay";

function App(){
  return (
    <div>
      <Header/>
      <JokeSearch/>
      <JokeDisplay/>
    </div>
  );
}

export default App;
