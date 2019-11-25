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
            <div>
                
            </div>
        )
    }
}

export default Pricing
