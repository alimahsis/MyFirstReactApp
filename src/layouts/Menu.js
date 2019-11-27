import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

class Menu extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand as={Link} to="/" >اولین پروژه من در ری اکت</Navbar.Brand>
                    <Navbar.Collapse>
                        <Nav className="mr-auto">
                            <NavItem eventkey={1} href="/">
                                <Nav.Link as={Link} to="/" active>خانه</Nav.Link>
                            </NavItem>
                            <NavItem eventkey={2} href="/cart">
                                <Nav.Link as={Link} to="/cart">سبدخرید</Nav.Link>
                            </NavItem>
                            <NavItem eventkey={3} href="/pricing">
                                <Nav.Link as={Link} to="/pricing">قیمت گذاری</Nav.Link>
                            </NavItem>
                            <NavItem eventkey={4} href="/currencyConverter">
                                <Nav.Link as={Link} to="/currencyConverter">تبدیل ارز</Nav.Link>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        )
    }
}

export default Menu
