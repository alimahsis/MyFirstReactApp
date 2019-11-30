import React, { Component } from "react";

const ThemeContext = React.createContext();
const ThemeProvider = ThemeContext.Provider;
const ThemeConsumer = ThemeContext.Consumer;

let defaultTheme = {
  bgMenu: "dark",
  variantMenu: "dark",
  handleChange: newTheme => {
    return (defaultTheme = {
      bgMenu: newTheme.bgMenu,
      variantMenu: newTheme.variantMenu
    });
  }
};

// class index extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       theme: {
//         bgMenu: "dark",
//         variantMenu: "dark",
//         handleChange: newTheme => {
//           return {
//             bgMenu: newTheme.bgMenu,
//             variantMenu: newTheme.variantMenu
//           };
//         }
//       }
//     };
//   }

//   getTheme = () => {
//     return this.state.theme;
//   };
// }

export { ThemeProvider, ThemeConsumer, defaultTheme }; //ThemeContext
export default ThemeContext; // index
