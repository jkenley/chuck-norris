import React, { Component } from "react";
import "./style.css";

//Components
import JokeHeader from "./components/JokeHeader";
import JokeList from "./components/JokeList";

class App extends Component {
  render() {
    return (
      <div>
        <JokeHeader />
        <JokeList />
      </div>
    );
  }
}

export default App;
