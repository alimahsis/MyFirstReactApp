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
        <div className="d-flex w-100 h-100 p-3 m-5 mx-auto flex-column text-center">
          <main role="main" className="inner cover">
            <h1 className="">صفحه اصلی</h1>
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
