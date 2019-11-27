import React, { Component } from 'react'
// import '../cover.css'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <>
            <div className="cover-container d-flex w-100 h-100 p-3 m-5 mx-auto flex-column text-center" style={{maxWidth: '39em'}}>
                <main role="main" className="inner cover">
                    <h1 className="cover-heading">صفحه اصلی</h1>
                    <p className="lead">این صفحه صرفاً جهت آزمایش و شروع به کار است.</p>
                    <p className="lead">
                        <a href="#" className="btn btn-lg btn-secondary">باشه</a>
                    </p>
                </main>
            </div>
            </>
        )
    }
}

export default Home
