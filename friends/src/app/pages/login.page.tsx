import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core';

import { User } from '../models/User';
import { State } from '../state/app.reducer';
import { login, checkToken } from '../state/app.actions';
import { LoginForm } from '../components/user/form.component';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Login = () => {
  const classes = useStyles({});
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector<State, string>((state) => state.auth.token);

  React.useEffect(() => {
    checkToken()(dispatch);
  }, [dispatch]);

  React.useEffect(() => {
    if (token) history.push('/friends');
  }, [history, token]);

  return (
    <div className={classes.root}>
      <LoginForm onSubmit={(user: User) => login(user)(dispatch)} />
    </div>
  );
};

export { Login };
