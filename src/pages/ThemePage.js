import React, { Component } from "react";
// import {} from "react-bootstrap";
import ThemeContext from "../components/ThemeContext";

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

        <div className="mb-3 text-center">
          <p className="lead">
            <a
              href="#"
              className="btn btn-lg btn-secondary"
              // onClick={ThemeContext}
            >
              جهت تغییر تم منو کلیک کنید
            </a>
          </p>
        </div>
      </>
    );
  }
}

export default ThemePage;
