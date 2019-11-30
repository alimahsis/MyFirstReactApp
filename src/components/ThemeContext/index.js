import React, { Component } from "react";

const ThemeContext = React.createContext();
const ThemeProvider = ThemeContext.Provider;
const ThemeConsumer = ThemeContext.Consumer;

let defaultTheme = {
  bgMenu: "dark",
  variantMenu: "dark"
};

// handleChangeTheme = new => {
//     defaultTheme = { bgMenu: new.bgMenu, variantMenu: new.variantMenu }
// };

export { ThemeProvider, ThemeConsumer, defaultTheme }; // , handleChangeTheme
export default ThemeContext;
