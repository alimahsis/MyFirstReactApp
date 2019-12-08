import React, { Component } from "react";

const ThemeContext = React.createContext();
const ThemeConsumer = ThemeContext.Consumer;

class ThemeProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: {
                bgMenu: "dark",
                variantMenu: "dark"
            },
            changeTheme: newTheme => {
                this.setState({ newTheme });
            }
        };
    }

    changeTheme = event => {
        const { name, value } = event.target,
            { bgMenu, variantMenu } = this.state.theme;

        const theme = {
            bgMenu: name === "bgMenu" ? value : bgMenu,
            variantMenu: name === "variantMenu" ? value : variantMenu
        };

        this.setState({
            theme
        });

        console.log(this.state);
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
