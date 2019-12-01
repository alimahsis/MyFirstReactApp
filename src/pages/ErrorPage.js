import React, { Component } from "react";

class ErrorPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Error: {this.props.error}</h1>
      </div>
    );
  }
}

export default ErrorPage;
