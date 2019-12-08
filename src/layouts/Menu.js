import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { ThemeConsumer } from "../components/ThemeContext";

class Menu extends Component {
    state = {
        links: [
            { name: "خانه", url: "/" },
            { name: "تعرفه", url: "/pricing" },
            { name: "تبدیل ارز", url: "/currencyConverter" },
            { name: "سبد", url: "/cart" },
            { name: "تم", url: "/theme" },
            { name: "برنامه ها", url: "/applications" }
        ]
    };

    render() {
        return (
            <>
                <ThemeConsumer>
                    {({ theme }) => (
                        <Navbar bg={theme.bgMenu} variant={theme.variantMenu} className="flex-row-reverse">
                            <Navbar.Brand as={Link} to="/" style={{ margin: "0 0 0 1em" }}>
                                اولین پروژه من در ری اکت
                            </Navbar.Brand>
                            <Navbar.Collapse className="justify-content-end">
                                <Nav className="flex-row-reverse">
                                    {this.state.links.map((link, index) => {
                                        return (
                                            <Nav.Link key={index} as={Link} href={link.url} to={link.url}>
                                                {link.name}
                                            </Nav.Link>
                                        );
                                    })}
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    )}
                </ThemeConsumer>
            </>
        );
    }
}

export default Menu;
