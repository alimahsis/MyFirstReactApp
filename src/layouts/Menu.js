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
                    <Navbar.Brand as={Link} to="/" >My First React App</Navbar.Brand>
                    <Navbar.Collapse>
                        <Nav className="mr-auto">
                            <NavItem eventkey={1} href="/">
                                <Nav.Link as={Link} to="/" active>Home</Nav.Link>
                            </NavItem>
                            <NavItem eventkey={2} href="/cart">
                                <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
                            </NavItem>
                            <NavItem eventkey={3} href="/pricing">
                                <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
                            </NavItem>
                            <NavItem eventkey={4} href="/currencyConverter">
                                <Nav.Link as={Link} to="/currencyConverter">Currency Converter</Nav.Link>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        )
    }
}

export default Menu
