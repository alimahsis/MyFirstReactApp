import React, { Component } from 'react'

class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        const { totalProduct, onInsert } = this.props;
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <span className="navbar-brand" href="#">
                    products 
                    <span style={{marginLeft:10}} className="badge badge-pill badge-dark">
                        {totalProduct}
                    </span>
                </span>
                <button
                    className="btn btn-sm btn-success"
                    onClick={()=>onInsert('Enter title here...', 1)}
                    type="button"
                    style={{float: 'right'}}
                >Insert Product</button>
            </nav>
        )
    }
}

export default Navbar