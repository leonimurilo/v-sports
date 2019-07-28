import React, { Component } from "react";
import PropTypes from "prop-types";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import DocumentTitle from "react-document-title";
import { PersistGate } from "redux-persist/integration/react";
import App from "../App";

export default class Root extends Component {
  render() {
    const { store, persistor, history } = this.props;

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router history={history}>
            <DocumentTitle title="Venturus Sports">
              <App />
            </DocumentTitle>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  persistor: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
