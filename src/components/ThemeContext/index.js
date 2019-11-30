import React, { Component } from 'react'

class index extends Component {
    constructor(props) {
        super(props);

        const themeContext = React.createContext;

        this.state = {
            theme: 'dark',
            showToolbox: true
        }
    }

    render() {
        return (
            <>
                <themeContext.Provider value={this.state}>
                    {this.props.children}
                </themeContext.Provider>
            </>
        )
    }
}

export default index
