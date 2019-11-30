import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { ThemeConsumer } from "../components/ThemeContext";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <ThemeConsumer>
          {theme => (
            <Navbar
              bg={theme.bgMenu}
              variant={theme.variantMenu}
              className="flex-row-reverse"
            >
              <Navbar.Brand as={Link} to="/" style={{ margin: "0 0 0 1em" }}>
                اولین پروژه من در ری اکت
              </Navbar.Brand>
              <Navbar.Collapse className="justify-content-end">
                <Nav className="flex-row-reverse">
                  <NavItem eventkey={1} href="/">
                    <Nav.Link as={Link} to="/">
                      خانه
                    </Nav.Link>
                  </NavItem>
                  <NavItem eventkey={3} href="/pricing">
                    <Nav.Link as={Link} to="/pricing">
                      تعرفه
                    </Nav.Link>
                  </NavItem>
                  <NavItem eventkey={4} href="/currencyConverter">
                    <Nav.Link as={Link} to="/currencyConverter">
                      تبدیل ارز
                    </Nav.Link>
                  </NavItem>
                  <NavItem eventkey={2} href="/cart">
                    <Nav.Link as={Link} to="/cart">
                      سبد
                    </Nav.Link>
                  </NavItem>
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
