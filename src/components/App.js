/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import AuthRoute from './auth/AuthRoute';
import { Switch } from 'react-router-dom';
import DashboardPage from './dashboard/DashboardPage';
import LoginPage from './auth/LoginPage';

import EditorPage from './editor/EditorPage';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {

    return (
      <div>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <AuthRoute path="/dashboard" component={DashboardPage} />
          <AuthRoute path="/editor" component={EditorPage} />
          <AuthRoute path="/" component={DashboardPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
