import React from "react";
import { hydrate } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import counterApp from "./reducers";

const preloadedState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__;

const store = createStore(counterApp, preloadedState);

hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
