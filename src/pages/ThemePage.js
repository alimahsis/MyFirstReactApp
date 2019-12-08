import React, { Component } from "react";
// import {} from "react-bootstrap";
import { ThemeProvider, ThemeConsumer } from "../components/ThemeContext";
import { FormControl, Form, Col } from "react-bootstrap";

class ThemePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pageTitle: "تغییر تم",
            description: "در این صفحه میتوانید تم پروژه را تغییر دهید"
        };
    }

    handelChangeMenuTheme(event) {
        // console.log({ [event.target.name]: event.target.value });
        // const key = event.target.name;
        // console.log(window[event.target.name]);
        console.log(ThemeProvider);
        ThemeProvider.changeTheme({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <>
                <div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                    <h1 className="display-4">{this.state.pageTitle}</h1>
                    <p className="lead">{this.state.description}</p>
                </div>

                <div className="card text-right">
                    <div className="card-header">منو</div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <ThemeConsumer>
                                {({ theme, changeTheme }) => (
                                    <Form>
                                        <Form.Row>
                                            <Form.Group
                                                as={Col}
                                                md="6"
                                                controlId="validationCustom01"
                                            >
                                                <Form.Label>
                                                    پس زمینه
                                                </Form.Label>

                                                <FormControl
                                                    as="select"
                                                    name="bgMenu"
                                                    onChange={changeTheme}
                                                >
                                                    <option value="dark">
                                                        تاریک
                                                    </option>
                                                    <option value="light">
                                                        روشن
                                                    </option>
                                                    <option value="info">
                                                        آبی روشن
                                                    </option>
                                                    <option value="warning">
                                                        نارنجی
                                                    </option>
                                                    <option value="danger">
                                                        قرمز
                                                    </option>
                                                    <option value="success">
                                                        سبز
                                                    </option>
                                                    <option value="secondary">
                                                        خاکستری
                                                    </option>
                                                    <option value="primary">
                                                        آبی
                                                    </option>
                                                </FormControl>
                                            </Form.Group>
                                            <Form.Group
                                                as={Col}
                                                md="6"
                                                controlId="validationCustom02"
                                            >
                                                <Form.Label>متن</Form.Label>
                                                <FormControl
                                                    as="select"
                                                    name="variantMenu"
                                                    onChange={changeTheme}
                                                >
                                                    <option value="dark">
                                                        روشن
                                                    </option>
                                                    <option value="light">
                                                        تاریک
                                                    </option>
                                                </FormControl>
                                            </Form.Group>
                                        </Form.Row>
                                    </Form>
                                )}
                            </ThemeConsumer>
                            <footer className="blockquote-footer text-left lead">
                                منو را ویرایش کنید
                            </footer>
                        </blockquote>
                    </div>
                </div>
            </>
        );
    }
}

export default ThemePage;
