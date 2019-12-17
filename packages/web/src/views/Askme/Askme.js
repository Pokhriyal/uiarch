import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';
import {
  AskmeResult,
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
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

const Askme = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <AskmeResult />
      
    </div>
  );
};

export default Askme;
