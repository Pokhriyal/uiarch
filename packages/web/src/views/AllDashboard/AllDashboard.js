import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  content: {
    paddingTop: 150,
    textAlign: 'center'
  },
  image: {
    marginTop: 50,
    display: 'inline-block',
    maxWidth: '100%',
    width: 560
  }
}));

const AllDashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <h1>All Dashboard</h1>
    </div>
  );
};

export default AllDashboard;
