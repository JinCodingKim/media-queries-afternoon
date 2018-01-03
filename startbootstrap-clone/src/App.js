import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./NavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <header className="image-background">
          <div className="body-container">
            <div className="welcome-text">Welcome To Our Studio!</div>
            <div className="greet-text">IT'S NICE TO MEET YOU</div>
            <a className="body-link">TELL ME MORE</a>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
