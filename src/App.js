import React, { Component } from "react";
import Menu from "./layouts/Menu";
import {BrowserRouter, Route} from 'react-router-dom';
import Router from "./Router";
import ThemeContext from './components/ThemeContext'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  }

  render() {
    return (
      <>
        <themeContext>
          <BrowserRouter>
            <Menu></Menu>
            <main className="container" style={{direction: 'rtl'}}>
              <Router></Router>
            </main>
          </BrowserRouter>
        </themeContext>

      </>
    );
  }
}

export default App;
