import React from "react";
import Menu from "./layouts/Menu";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { ThemeProvider } from "./components/ThemeContext";
import ErrorBoundry from "./layouts/ErrorBoundry";

function App() {
    return (
        <>
            <ErrorBoundry>
                <ThemeProvider>
                    <BrowserRouter>
                        <Menu></Menu>
                        <Router></Router>
                    </BrowserRouter>
                </ThemeProvider>
            </ErrorBoundry>
        </>
    );
}

export default App;
