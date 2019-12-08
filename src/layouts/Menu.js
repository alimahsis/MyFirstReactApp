import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { ThemeConsumer } from "../components/ThemeContext";

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            links: [
                { name: "خانه", url: "/" },
                { name: "تعرفه", url: "/pricing" },
                { name: "تبدیل ارز", url: "/currencyConverter" },
                { name: "سبد", url: "/cart" },
                { name: "تم", url: "/theme" }
            ]
        };
    }

<<<<<<< HEAD
    render() {
        return (
            <>
                <ThemeConsumer>
                    {({ theme }) => (
                        <Navbar
                            bg={theme.bgMenu}
                            variant={theme.variantMenu}
                            className="flex-row-reverse"
                        >
                            <Navbar.Brand
                                as={Link}
                                to="/"
                                style={{ margin: "0 0 0 1em" }}
                            >
                                اولین پروژه من در ری اکت
                            </Navbar.Brand>
                            <Navbar.Collapse className="justify-content-end">
                                <Nav className="flex-row-reverse">
                                    {this.state.links.map((link, index) => {
                                        return (
                                            <Nav.Link
                                                key={index}
                                                as={Link}
                                                href={link.url}
                                                to={link.url}
                                            >
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
=======
  render() {
    return (
      <>
        <ThemeConsumer>
          {({ theme, changeTheme }) => (
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
                  <NavItem eventkey={2} href="/theme">
                    <Nav.Link as={Link} to="/theme">
                      تم
                    </Nav.Link>
                  </NavItem>
                  <NavItem eventkey={2} href="/applications">
                    <Nav.Link as={Link} to="/applications">
                      برنامه ها
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
>>>>>>> fb779b4e708f05a0cd824b55b171378627c92a68
}

export default Menu;
