import React, { Component } from "react";

<<<<<<< HEAD
class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    planClass() {
        return `btn btn-lg btn-block ${this.props.data.button.class}`;
    }

    render() {
        const { data } = this.props;
        return (
            <div className="card mb-4 shadow-sm">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">{data.title}</h4>
                </div>
                <div className="card-body">
                    <h1 className="card-title pricing-card-title">
                        {data.price}
                        {data.currency}{" "}
                        <small className="text-muted">/ {data.duration}</small>
                    </h1>
                    <ul
                        className="list-unstyled mt-3 mb-4"
                        style={{ paddingRight: 0 }}
                    >
                        {data.options.map((value, index) => {
                            return <li key={index}>{value}</li>;
                        })}
                    </ul>
                    <button type="button" className={this.planClass()}>
                        {data.button.caption}
                    </button>
                </div>
            </div>
        );
    }
=======
const planClass = props => {
  return `btn btn-lg btn-block ${props.data.button.class}`;
};

function Index(props) {
  const { data } = props;
  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">{data.title}</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">
          {data.price}
          {data.currency}
          <small className="text-muted">/ {data.duration}</small>
        </h1>
        <ul className="list-unstyled mt-3 mb-4" style={{ paddingRight: 0 }}>
          {data.options.map(o => {
            return <li>{o}</li>;
          })}
        </ul>
        <button type="button" className={planClass(props)}>
          {data.button.caption}
        </button>
      </div>
    </div>
  );
>>>>>>> fb779b4e708f05a0cd824b55b171378627c92a68
}

export default Index;
