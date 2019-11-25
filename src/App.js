import React, { Component } from "react";
import Menu from "./layouts/Menu";
import {BrowserRouter, Route} from 'react-router-dom';
import Router from "./Router";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Menu></Menu>
          <main className="container">
            <Router></Router>
          </main>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
