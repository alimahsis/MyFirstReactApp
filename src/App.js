import React, { Component } from "react";
import Menu from "./layouts/Menu";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { ThemeProvider, defaultTheme } from "./components/ThemeContext"; // ThemeContext

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    // console.log(ThemeContext.getTheme());
  }

  render() {
    return (
      <>
        <ThemeProvider value={defaultTheme}>
          <BrowserRouter>
            <Menu></Menu>
            <Router></Router>
          </BrowserRouter>
        </ThemeProvider>
      </>
    );
  }
}

export default App;
