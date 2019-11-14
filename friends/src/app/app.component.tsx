import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import { CssBaseline } from '@material-ui/core';

import { store } from './state/app.store';

import { Friends } from './pages/friends.page';
import { Login } from './pages/login.page';

import { Error } from './components/reusable/error/error.component';
import { PrivateRoute } from './components/reusable/private-route/private-route.component';

const App = () => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Error />
      <BrowserRouter>
        <Route path='/login' component={Login} />
        <PrivateRoute path='/friends' component={Friends} />
      </BrowserRouter>
    </Provider>
  );
};

export { App };
