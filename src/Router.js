import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import NotFoundPage from "./pages/NotFoundPage";
import Pricing from "./pages/Pricing";
import CurrencyConverterPage from "./pages/CurrencyConverterPage";
import ThemePage from "./pages/ThemePage";

class Router extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <main className="container" style={{ direction: "rtl" }}>
        <Switch>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
          <Route path="/cart">
            <CartPage></CartPage>
          </Route>
          <Route path="/pricing">
            <Pricing></Pricing>
          </Route>
          <Route path="/currencyConverter">
            <CurrencyConverterPage></CurrencyConverterPage>
          </Route>
          <Route path="/theme">
            <ThemePage></ThemePage>
          </Route>
          <Route path="*">
            <NotFoundPage></NotFoundPage>
          </Route>
        </Switch>
      </main>
    );
  }
}

export default Router;
