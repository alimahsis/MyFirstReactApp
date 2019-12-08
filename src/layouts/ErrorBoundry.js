import React, { Component } from "react";
import ErrorPage from "../pages/ErrorPage";

class ErrorBoundry extends Component {
    state = {
        hasError: false,
        errorObj: null
    };

    static getDerivedStateFromError(error) {
        return { hasError: true, errorObj: error };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service : logErrorToMyService(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <ErrorPage errorObj={this.state.errorObj}></ErrorPage>;
        } else {
            return <>{this.props.children}</>;
        }
    }
}

window.onerror = error => {
    // You can also log the error to an error reporting service : logErrorToMyService(error, errorInfo);
};

export default ErrorBoundry;
