import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
// import PropTypes from "prop-types";

import HomePage from "containers/HomePage";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Header /> */}
        <Switch>
          <Route component={HomePage} exact path="/" />
        </Switch>
      </div>
    );
  }

}

export default App;
