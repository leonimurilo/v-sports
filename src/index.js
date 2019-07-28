import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import createHistory from "history/createBrowserHistory";
import configureStore from './store/configureStore';
import Root from "./components/Root";
import "styles/main.sass";
require("./favicon.ico"); // Tell webpack to load favicon.ico

const {store, persistor} = configureStore();
const history = createHistory();

render(
  <AppContainer>
    <Root store={store} history={history} persistor={persistor}/>
  </AppContainer>,
  document.getElementById("app")
);

if (module.hot) {
  module.hot.accept("./components/Root", () => {
    const NewRoot = require("./components/Root").default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} persistor={persistor}/>
      </AppContainer>,
      document.getElementById("app")
    );
  });
}
