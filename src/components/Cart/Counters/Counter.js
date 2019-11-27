import React, { Component } from 'react'

class Counter extends Component {
    getBadgeClass() {
        return "badge m-1 p-2 float-right " + ( this.props.counter.value === 0 ? "badge-secondary" : "badge-primary");
    }

    render() {
        const { counter, onDelete, onDecrement, onIncrement, onChangeTitle } = this.props;

        let btn_style = {
            width: 38,
            height: 38,
            lineHeight: '20px',
            color: '#fff',
            fontWeight: 'bold',
            borderRadius: '0',
            margin: '0 !important'
        }

        return (
            <li className="list-group-item">
                <input
                    className="form-control float-right"
                    value={counter.title}
                    style={{
                        display: 'inline-block',
                        width: 'auto',
                        border: 'none'
                    }}
                    onChange={e => onChangeTitle(counter, e.target.value)}
                ></input>
                <span className={this.getBadgeClass()}>{counter.value}</span>
                <div class="btn-group rounded overflow-hidden" style={{float: 'left'}}>
                    <span style={btn_style} className="btn btn-danger" onClick={()=>onDelete(counter.id)}>×</span>
                    <span style={btn_style} className="btn btn-warning" onClick={()=>onDecrement(counter)}>-</span>
                    <span style={btn_style} className="btn btn-success" onClick={()=>onIncrement(counter)}>+</span>
                </div>
            </li>
        )
    }
}

export default Counter