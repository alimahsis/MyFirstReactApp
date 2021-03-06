import React from "react";

function planClass(addCass) {
    return `btn btn-lg btn-block ${addCass}`;
}

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
                    {data.currency} <small className="text-muted">/ {data.duration}</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4" style={{ paddingRight: 0 }}>
                    {data.options.map((value, index) => {
                        return <li key={index}>{value}</li>;
                    })}
                </ul>
                <button type="button" className={planClass(data.button.class)}>
                    {data.button.caption}
                </button>
            </div>
        </div>
    );
}

export default Index;
