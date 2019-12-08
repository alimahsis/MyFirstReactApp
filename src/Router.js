import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
// Pages
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import NotFoundPage from "./pages/NotFoundPage";
import Pricing from "./pages/Pricing";
import CurrencyConverterPage from "./pages/CurrencyConverterPage";
import ThemePage from "./pages/ThemePage";
import ApplicationsPage from "./pages/ApplicationsPage";

class Router extends Component {
  state = {
    routes: [
      { path: "/", component: HomePage, exact: true },
      { path: "/cart", component: CartPage },
      { path: "/pricing", component: Pricing },
      { path: "/currencyConverter", component: CurrencyConverterPage },
      { path: "/theme", component: ThemePage },
      { path: "/applications", component: ApplicationsPage },
      { path: "*", component: NotFoundPage }
    ]
  };

  render() {
    return (
      <main className="container" style={{ direction: "rtl" }}>
        <Switch>
          {this.state.routes.map(route => (
            <Route {...route} />
          ))}
        </Switch>
      </main>
    );
  }
}

export default Router;
