import React, { Component } from "react";
import ErrorPage from "../pages/ErrorPage";
class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  static getDerivedStateFromError(error) {
    // console.log(error);
    return { hasError: true, error: error };
  }

  render() {
    return (
      <>
        {this.state.hasError ? (
          <ErrorPage error={this.state.error}></ErrorPage>
        ) : (
          this.props.children
        )}
      </>
    );
  }
}

export default ErrorBoundry;
