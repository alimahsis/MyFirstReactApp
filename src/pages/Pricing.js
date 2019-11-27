import React, { Component } from 'react'
import Plan from '../components/Plan'

class Pricing extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pageTitle: "Pricing",
            description: "با این مثال سریعاً یک جدول قیمت گذاری موثر برای مشتریان بالقوه خود بسازید. با اجزای پیش فرض و برنامه های کاربردی و با سفارشی سازی کمی ساخته شده است",
            plans: [
                {
                    id: 1,
                    title: 'رایگان',
                    price: '0',
                    currency: "تومان",
                    duration: 'ماه',
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
                    currency: "تومان",
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
                    currency: "تومان",
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
                    
                    {this.state.plans.map(plan => {
                        return <Plan data={plan}></Plan>
                    })}
                    
                </div>
            </>
        )
    }
}

export default Pricing
