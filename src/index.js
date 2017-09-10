/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore, { history } from './store/configureStore';
import Root from './components/Root';
import { isAuthenticated } from './auth/auth';
import { AUTH_USER } from './actions/actionTypes';
import { fetchAccount } from './actions/authActions';



require('./favicon.ico'); // Tell webpack to load favicon.ico
const store = configureStore();


if (isAuthenticated()) {
  // we need to update application state
  store.dispatch({ type: AUTH_USER });
  fetchAccount()(store.dispatch);
}

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
