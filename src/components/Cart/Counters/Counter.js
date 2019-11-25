import React, { Component } from 'react'

class Counter extends Component {
    getBadgeClass() {
        return "badge m-3 p-2 " + ( this.props.counter.value === 0 ? "badge-secondary" : "badge-primary");
    }

    render() {
        const { counter, onDelete, onDecrement, onIncrement, onChangeTitle } = this.props;

        let btn_style = {
            width: 38,
            height: 38,
            lineHeight: '20px',
            color: '#fff',
            fontWeight: 'bold',
            float: 'right'
        }

        return (
            <li className="list-group-item">
                <input
                    className="form-control"
                    value={counter.title}
                    style={{
                        display: 'inline-block',
                        width: 'auto',
                        border: 'none'
                    }}
                    onChange={e => onChangeTitle(counter, e.target.value)}
                ></input>
                <span className={this.getBadgeClass()}>{counter.value}</span>
                <span style={btn_style} className="btn m-1 btn-danger" onClick={()=>onDelete(counter.id)}>×</span>
                <span style={btn_style} className="btn m-1 btn-warning" onClick={()=>onDecrement(counter)}>-</span>
                <span style={btn_style} className="btn m-1 btn-success" onClick={()=>onIncrement(counter)}>+</span>
            </li>
        )
    }
}

export default Counter