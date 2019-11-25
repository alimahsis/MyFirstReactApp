import React, { Component } from "react";
import Cart from "./components/Cart";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "home"
    };

  }

  routePage = pageName => {
    this.setState({
      page: pageName
    });
  };

  render() {
    return (
      <React.Fragment>
        <Cart></Cart>
      </React.Fragment>
    );
  }
}

export default App;
