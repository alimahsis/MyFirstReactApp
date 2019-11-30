import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <div
          className="cover-container d-flex w-100 h-100 p-3 m-5 mx-auto flex-column text-center"
          style={{ maxWidth: "39em" }}
        >
          <main role="main" className="inner cover">
            <h1 className="cover-heading">صفحه اصلی</h1>
            <p className="lead">این صفحه صرفاً جهت آزمایش و شروع به کار است.</p>
            <p className="lead">
              <Link to="/pricing" className="btn btn-lg btn-secondary">
                باشه
              </Link>
            </p>
          </main>
        </div>
      </>
    );
  }
}

export default Home;
