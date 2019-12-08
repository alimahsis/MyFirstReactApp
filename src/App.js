import React, { Component } from "react";
import Menu from "./layouts/Menu";
import { BrowserRouter } from "react-router-dom";
<<<<<<< HEAD
import Router from "./routes/Router";
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
=======
import Router from "./Router";
import { ThemeProvider } from "./components/ThemeContext";
import ErrorBoundry from "./layouts/ErrorBoundry";

function App() {
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
>>>>>>> fb779b4e708f05a0cd824b55b171378627c92a68
}

export default App;
