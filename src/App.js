import React, { Component } from "react";
import Menu from "./layouts/Menu";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { ThemeProvider } from "./components/ThemeContext";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: {
        bgMenu: "dark",
        variantMenu: "dark"
      }
    };
  }

  render() {
    return (
      <>
        <ThemeProvider value={this.state.theme}>
          <BrowserRouter>
            <Menu></Menu>
            <main className="container" style={{ direction: "rtl" }}>
              <Router></Router>
            </main>
          </BrowserRouter>
        </ThemeProvider>
      </>
    );
  }
}

export default App;
