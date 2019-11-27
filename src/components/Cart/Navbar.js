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
            <nav className="card-header text-right">
                <span className="navbar-brand" href="#">
                    کالاها 
                    <span style={{marginRight:10}} className="badge badge-pill badge-dark">
                        {totalProduct}
                    </span>
                </span>
                <button
                    className="btn btn-md btn-success float-left"
                    onClick={()=>onInsert('Enter title here...', 1)}
                    type="button"
                    style={{float: 'left'}}
                >افزودن کالا</button>
            </nav>
        )
    }
}

export default Navbar