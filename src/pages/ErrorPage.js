import React, { Component } from "react";

class ErrorPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageTitle: "خطایی رخ داده است",
      description:
        "این صفحه زمانی به نمایش در می آید که در روند اجرای دستورات خطایی رخ دهد",
      errorText: ""
    };
  }

  componentDidMount() {
    const text = this.props.errorObj.toString().replace("Error:", "");
    this.setState({ errorText: text });
  }

  render() {
    return (
      <>
        <main className="container" style={{ direction: "rtl" }}>
          <div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center text-danegr">
            <h1 className="display-4">{this.state.pageTitle}</h1>
            <p className="lead m-0">{this.state.description}</p>
          </div>

          <div class="alert alert-danger text-right p-4" role="alert">
            <p class="mb-0 text-center font-weight-lighter">
              {this.state.errorText}
            </p>
          </div>

          <div className="lead text-center">
            <a className="btn btn-danger p-2" href="">
              بازگشت
            </a>
          </div>
        </main>
      </>
    );
  }
}

export default ErrorPage;
