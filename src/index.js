import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./components/App";
import LoginForm from "./components/LoginForm";
import reducer from "./reducer";
import thunkMiddleware from "redux-thunk";
import { tokenMiddleware } from "./middleware";
import { Provider } from "react-redux";
import { Route } from "react-router";
import { ConnectedRouter } from "react-router-redux";
import { createStore, applyMiddleware } from "redux";
import createHistory from "history/createBrowserHistory";

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, tokenMiddleware)
);
const history = createHistory();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" component={LoginForm} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
