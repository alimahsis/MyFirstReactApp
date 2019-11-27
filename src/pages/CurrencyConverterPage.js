import React, { Component } from 'react'
import CurrencyConverter from '../components/CurrencyConverter'

class CurrencyConverterPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pageTitle: "تبدیل نرخ ارز",
            description: "جهت تبدیل نرخ ارز در یکی از ورودی های زیر مقدار مورد نظر خود را وارد نمایید."
        }
    }

    render() {
        return (
            <>
                <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                    <h1 className="display-4">{this.state.pageTitle}</h1>
                    <p className="lead">{this.state.description}</p>
                </div>
                <CurrencyConverter></CurrencyConverter>    
            </>
        )
    }
}

export default CurrencyConverterPage
