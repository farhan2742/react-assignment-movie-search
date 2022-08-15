import React from "react";
import { Provider } from "react-redux";
import store from "./store/store.js";
import Dashboard from "./pages/Dashboard/Dashboard";

import "./App.css";

function App() {
    return (
        <Provider store={store}>
            <Dashboard mode="dark" />
        </Provider>
    );
}

export default App;
