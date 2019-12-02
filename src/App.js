import React, { Component } from "react";
import Menu from "./layouts/Menu";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { ThemeProvider } from "./components/ThemeContext"; // ThemeContext
import ErrorBoundry from "./layouts/ErrorBoundry";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <ErrorBoundry>
          <ThemeProvider>
            <BrowserRouter>
              <Menu></Menu>
              <Router></Router>
            </BrowserRouter>
          </ThemeProvider>
        </ErrorBoundry>
      </>
    );
  }
}

export default App;
