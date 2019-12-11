import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Paper } from '@material-ui/core';
import clsx from 'clsx';

import {
  ReadingCard,
  FilterPanel,
  TitleBar
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeightFirstRowCard: {
    height: 180,
    paddingLeft: '0',
    paddingRight: '0',
    borderRadius: '7px',
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeightFirstRowCard);
  return (
    <div className={classes.root}>
      <TitleBar />
      <FilterPanel />
      <Grid
        container
        spacing={2}
      >
        <Grid
          item
          lg={4}
          sm={6}
          xl={3}
          xs={12}
        >
          <Paper className={fixedHeightPaper}>
            <ReadingCard />
          </Paper>
        </Grid>
        <Grid
          item
          lg={4}
          sm={6}
          xl={3}
          xs={12}
        >
          <Paper className={fixedHeightPaper}>
            <ReadingCard />
          </Paper>
        </Grid>
        <Grid
          item
          lg={4}
          sm={6}
          xl={3}
          xs={12}
        >
          <Paper className={fixedHeightPaper}>
            <ReadingCard />
          </Paper>
        </Grid>
        <Grid
          item
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >
          Hello
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          Hello
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          Hello
        </Grid>
        <Grid
          item
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >
          Hello
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
