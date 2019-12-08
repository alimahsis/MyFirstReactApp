import React, { Component } from "react";

const ThemeContext = React.createContext();
const ThemeConsumer = ThemeContext.Consumer;

class ThemeProvider extends Component {
    state = {
        theme: { bgMenu: "dark", variantMenu: "dark" },
        changeTheme: newTheme => {
            this.setState({ newTheme });
        }
    };

    componentDidUpdate() {
        localStorage.setItem("theme", JSON.stringify(this.state));
    }

    componentDidMount() {
        this.setState(JSON.parse(localStorage.getItem("theme")));
    }

    changeTheme = event => {
        const { name, value } = event.target,
            { bgMenu, variantMenu } = this.state.theme,
            theme = {
                bgMenu: name === "bgMenu" ? value : bgMenu,
                variantMenu: name === "variantMenu" ? value : variantMenu
            };

        this.setState({ theme });
    };

    render() {
        return (
            <ThemeContext.Provider
                value={{
                    theme: this.state.theme,
                    changeTheme: this.changeTheme
                }}
            >
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export { ThemeProvider, ThemeConsumer };
export default ThemeContext;
