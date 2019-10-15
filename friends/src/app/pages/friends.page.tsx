import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Card, CardContent, Typography, makeStyles, Fab, Icon } from '@material-ui/core';

import { Friend } from '../models/Friend';
import { State } from '../state/app.reducer';
import { getFriends, signOut } from '../state/app.actions';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 10,
  },
  grid: {
    display: 'grid',
    gridGap: '10px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(165px, 1fr))',
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fab: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    color: 'white',
  },
}));

const Friends = () => {
  const classes = useStyles({});
  const dispatch = useDispatch();
  const friends = useSelector<State, Friend[]>((state) => state.friends.list);
  const history = useHistory();

  React.useEffect(() => {
    getFriends()(dispatch);
  }, [dispatch]);

  const handleFab = () => {
    signOut()(dispatch);
    history.push('/login');
  };

  return (
    <div className={classes.root}>
      <Typography variant='overline'>Friends</Typography>
      <div className={classes.grid}>
        {friends.map((friend) => (
          <Card key={friend.id}>
            <CardContent className={classes.card}>
              <Typography variant='h4'>{friend.name}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
      <Fab color='primary' className={classes.fab} onClick={handleFab}>
        <Icon>arrow_back</Icon>
      </Fab>
    </div>
  );
};

export { Friends };
