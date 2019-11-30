import React, { Component } from "react";
import {} from "react-bootstrap";

class ThemePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageTitle: "تغییر تم",
      description: "در این صفحه میتوانید تم صفحه را تغییر دهید"
    };
  }

  render() {
    return (
      <>
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4">{this.state.pageTitle}</h1>
          <p className="lead">{this.state.description}</p>
        </div>

        <div className="card-deck mb-3 text-center"></div>
      </>
    );
  }
}

export default ThemePage;
