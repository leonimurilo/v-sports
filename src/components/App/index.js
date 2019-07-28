import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
// import PropTypes from "prop-types";

import HomePage from "containers/HomePage";
import UsersPage from "containers/UsersPage";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Header /> */}
        <Switch>
          <Route component={HomePage} exact path="/" />
          <Route component={UsersPage} path="/users" />
        </Switch>
      </div>
    );
  }

}

export default App;
