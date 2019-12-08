import React, { Component } from "react";
import Plan from "../components/Plan";

class Pricing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pageTitle: "تعرفه",
            description:
                "با این مثال سریعاً یک جدول قیمت گذاری موثر برای مشتریان بالقوه خود بسازید. با اجزای پیش فرض و برنامه های کاربردی و با سفارشی سازی کمی ساخته شده است",
            plans: [
                {
                    id: 1,
                    title: "رایگان",
                    price: "0",
                    currency: "دلار",
                    duration: "ماه",
                    options: [
                        "10 کاربر گنجانده شده است",
                        "2 گیگابایت فضا",
                        "پشتیبانی ایمیلی",
                        "دسترسی به مرکز راهنما"
                    ],
                    button: {
                        caption: "ثبت نام رایگان",
                        class: "btn-outline-primary",
                        url: "/Plans/Plan1"
                    }
                },
                {
                    id: 2,
                    title: "حرفه ای",
                    price: "15",
                    currency: "دلار",
                    duration: "ماه",
                    options: [
                        "20 کاربر گنجانده شده است",
                        "10 گیگابایت فضا",
                        "پشتیبانی ایمیلی با اولویت",
                        "دسترسی به مرکز راهنما"
                    ],
                    button: {
                        caption: "شروع کنید",
                        class: "btn-primary",
                        url: "/Plans/Plan2"
                    }
                },
                {
                    id: 3,
                    title: "سازمانی",
                    price: "30",
                    currency: "دلار",
                    duration: "ماه",
                    options: [
                        "30 کاربر گنجانده شده است",
                        "15 گیگابایت فضا",
                        "پشتیبانی ایمیلی و تلفنی",
                        "دسترسی به مرکز راهنما"
                    ],
                    button: {
                        caption: "تماس بگیرید",
                        class: "btn-primary",
                        url: "/Plans/Plan3"
                    }
                }
            ]
        };
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
                        return <Plan key={plan.id} data={plan}></Plan>;
                    })}
                </div>
            </>
        );
    }
}

export default Pricing;
