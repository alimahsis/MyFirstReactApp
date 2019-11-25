import React, { Component } from 'react'
import Counter from './Counter'

class Index extends Component {
    render() {
        const { counters, onDelete, onIncrement, onDecrement, onChangeTitle } = this.props;

        return (
            <ul className="list-group list-group-flush" style={{marginTop: 30}}>
                {
                counters.map( counter => 
                    <Counter 
                        key={counter.id} 
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        counter={counter} 
                        onChangeTitle={onChangeTitle}
                    ></Counter>
                    )
                }
            </ul>
        )
    }
}

export default Index