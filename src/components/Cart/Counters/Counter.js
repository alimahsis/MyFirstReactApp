import React from "react";

function getBadgeClass(value) {
    return "badge m-1 p-2 float-right " + (value === 0 ? "badge-secondary" : "badge-primary");
}

function Counter(props) {
    const { counter, onDelete, onDecrement, onIncrement, onChangeTitle } = props,
        btn_style = {
            width: 38,
            height: 38,
            lineHeight: "20px",
            color: "#fff",
            fontWeight: "bold",
            borderRadius: "0",
            margin: "0 !important"
        };

    return (
        <li className="list-group-item">
            <input
                className="form-control float-right"
                value={counter.title}
                style={{
                    display: "inline-block",
                    width: "auto",
                    border: "none"
                }}
                onChange={e => onChangeTitle(counter, e.target.value)}
            ></input>
            <span className={getBadgeClass(counter.value)}>{counter.value}</span>
            <div className="btn-group rounded overflow-hidden" style={{ float: "left" }}>
                <span style={btn_style} className="btn btn-danger" onClick={() => onDelete(counter.id)}>
                    ×
                </span>
                <span style={btn_style} className="btn btn-warning" onClick={() => onDecrement(counter)}>
                    -
                </span>
                <span style={btn_style} className="btn btn-success" onClick={() => onIncrement(counter)}>
                    +
                </span>
            </div>
        </li>
    );
}

export default Counter;
