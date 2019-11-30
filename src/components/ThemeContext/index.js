import React, { Component } from "react";

const thisContext = React.createContext;
// const ThemeProvider = thisContext.Provider;
// const ThemeConsumer = thisContext.Consumer;

class index extends Component {
  static contextType = React.createContext;
  static ThemeProvider = thisContext.Provider;

  constructor(props) {
    super(props);

    this.state = {
      theme: "dark",
      showToolbox: true
    };
  }

  render() {
    return (
      <>
        <ThemeProvider value="dark">{this.props.children}</ThemeProvider>
      </>
    );
  }
}

// export { ThemeProvider, ThemeConsumer };
export default index;
