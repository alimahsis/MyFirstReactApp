import React from "react";
import Counter from "./Counter";

function Index(props) {
    const { counters, onDelete, onIncrement, onDecrement, onChangeTitle } = props;

    return (
        <ul className="list-group list-group-flush" style={{ marginTop: 30 }}>
            {counters.map(counter => (
                <Counter
                    key={counter.id}
                    onDelete={onDelete}
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                    counter={counter}
                    onChangeTitle={onChangeTitle}
                ></Counter>
            ))}
        </ul>
    );
}

export default Index;
