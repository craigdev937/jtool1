import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { RootReducer } from "../global/RootReducer";
import { Main } from "../components/Main";

export const App = (): JSX.Element => {
    return (
        <React.Fragment>
            <Provider store={RootReducer}>
                <Main />
            </Provider>
        </React.Fragment>
    );
};






