import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

import { Provider } from "react-redux";
import store from "./store";

import * as serviceWorker from "./serviceWorker";

import "./index.css";

import ErrorBoundary from "./ErrorBoundary";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ErrorBoundary fallback="Something Wrong">
    <Provider store={store}>
      <App hasError />
    </Provider>
  </ErrorBoundary>

  ,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
