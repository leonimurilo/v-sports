import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
// import PropTypes from "prop-types";

import Header from "components/Header";
import HomePage from "containers/HomePage";
import UsersPage from "containers/UsersPage";

import './style.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="page-container">
          <Switch>
            <Route component={HomePage} exact path="/" />
            <Route component={UsersPage} path="/users" />
          </Switch>
        </div>
      </div>
    );
  }

}

export default App;
