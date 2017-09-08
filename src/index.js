/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore, { history } from './store/configureStore';
import Root from './components/Root';
import { isAuthenticated } from './auth/auth';
import { AUTH_USER } from './actions/actionTypes';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style-landing.css'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import './styles/common/style.css';
import './styles/common/style-retina.css';

import 'bootstrap/dist/js/bootstrap';

require('./favicon.ico'); // Tell webpack to load favicon.ico
const store = configureStore();


if (isAuthenticated()) {
  // we need to update application state
  store.dispatch({ type: AUTH_USER });
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
