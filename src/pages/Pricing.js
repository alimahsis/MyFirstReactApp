import React, { Component } from 'react'

class Pricing extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pageTitle: "Pricing",
            description: "Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.",
            plans: [
                {
                    id: 1,
                    title: 'Free=',
                    price: '0',
                    duration: 'mo',
                    options: [
                        "10 users included",
                        "2 GB of storage",
                        "Email support",
                        "Help center access"
                    ],
                    button: {
                        caption: "Sign up for free",
                        class: "btn-outline-primary",
                        url: "/Plans/Plan1"
                    }
                },
                {
                    id: 2,
                    title: 'Pro',
                    price: '15',
                    duration: 'mo',
                    options: [
                        "20 users included",
                        "10 GB of storage",
                        "Priority email support",
                        "Help center access"
                    ],
                    button: {
                        caption: "Get started",
                        class: "btn-primary",
                        url: "/Plans/Plan2"
                    }
                },
                {
                    id: 3,
                    title: 'Free',
                    price: '0',
                    duration: 'mo',
                    options: [
                        "30 users included",
                        "15 GB of storage",
                        "Phone and email support",
                        "Help center access"
                    ],
                    button: {
                        caption: "Contact us",
                        class: "btn-primary",
                        url: "/Plans/Plan3"
                    }
                }
            ]
        }
    }

    render() {
        return (
            <>
                <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                    <h1 className="display-4">{this.state.pageTitle}</h1>
                    <p className="lead">{this.state.description}</p>
                </div>
                
                <div className="card-deck mb-3 text-center">
                    
                    <div className="card mb-4 shadow-sm">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">Free</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">$0 <small className="text-muted">/ mo</small></h1>
                            <ul className="list-unstyled mt-3 mb-4">
                            <li>10 users included</li>
                            <li>2 GB of storage</li>
                            <li>Email support</li>
                            <li>Help center access</li>
                            </ul>
                            <button type="button" className="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
                        </div>
                    </div>
                    
                </div>
            </>
        )
    }
}

export default Pricing
