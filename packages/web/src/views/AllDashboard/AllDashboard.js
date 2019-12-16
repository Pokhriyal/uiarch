import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Paper } from '@material-ui/core';
import { TitleBar, TabExpandView } from '../Dashboard/components';
import { AllDashboardReadingCard } from './components';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  headPaper: {
    padding: '25px 12px'
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
  },
  headPanel: {
    background: 'red'
  },
  allDashboard: {
    padding: '12px'
  },
  dashboardTitle: {
    paddingTop: '20px',
    paddingBottom: '20px'
  },
  gridRoot: {

  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeightCard: {
    height: '280px',
    paddingLeft: '0',
    paddingRight: '0',
    borderRadius: '7px',
    width: '480px',
    marginRight: '20px'
  },
  cardDetails: {
      display: 'flex'
  },
  allDashboardWorkspace:{
    padding: '12px'
  }
}));

const AllDashboard = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeightCard);
  return (
    <div >
      <TabExpandView />
      <Paper className={classes.headPaper}>
        <Typography variant="h2" component="h3">
          All Dashboards
        </Typography>
      </Paper>
      <div className={classes.allDashboard}>
        <Typography variant="h5" component="h3" className={classes.dashboardTitle}>
          Insurance & PortFolio
        </Typography>
        <div className={classes.cardDetails}>
          <Paper className={classes.fixedHeightCard}>
            <AllDashboardReadingCard />
          </Paper>
          <Paper className={classes.fixedHeightCard}>
            <AllDashboardReadingCard />
          </Paper>
          <Paper className={classes.fixedHeightCard}>
            <AllDashboardReadingCard />
          </Paper>
          <Paper className={classes.fixedHeightCard}>
            <AllDashboardReadingCard />
          </Paper>
        </div>


      </div>
      <div className={classes.allDashboardWorkspace}>
        <Typography variant="h5" component="h3" className={classes.dashboardTitle}>
          My Workspace
        </Typography>
        <div className={classes.cardDetails}>
          <Paper className={classes.fixedHeightCard}>
            <AllDashboardReadingCard />
          </Paper>
          <Paper className={classes.fixedHeightCard}>
            <AllDashboardReadingCard />
          </Paper>
          <Paper className={classes.fixedHeightCard}>
            <AllDashboardReadingCard />
          </Paper>
          <Paper className={classes.fixedHeightCard}>
            <AllDashboardReadingCard />
          </Paper>
        </div>


      </div>
    </div>
  );
};

export default AllDashboard;
