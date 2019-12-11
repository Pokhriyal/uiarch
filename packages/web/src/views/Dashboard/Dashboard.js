import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Paper, IconButton, Menu, MenuItem, Typography } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CompareIcon from '@material-ui/icons/Compare';
import AllOutIcon from '@material-ui/icons/AllOut';
import ShareIcon from '@material-ui/icons/Share';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import PublishIcon from '@material-ui/icons/Publish';
import clsx from 'clsx';

import {
  ReadingCard,
  FilterPanel,
  TitleBar,
  TabExpandView
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
    height: '180px',
    paddingLeft: '0',
    paddingRight: '0',
    borderRadius: '7px',
  },
  graphCard: {
    height: '300px',
    paddingLeft: '0',
    paddingRight: '0',
    borderRadius: '7px',
  },
  shiftRight: {
    marginLeft: 'auto',
  },
  flexDisplay:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  dashboardTitle: {
    marginLeft: '15px',
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeightFirstRowCard);
 const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <TabExpandView />
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
          lg={4}
          md={12}
          xl={9}
          xs={12}
        >
          <Paper className={classes.graphCard}>
            <div className={classes.flexDisplay}>
            <div className={classes.dashboardTitle}>
            <Typography variant="h6" display="block" >
                    Monthly Trend
            </Typography>
            </div>
            <div className={classes.shiftRight}>
              <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <Typography variant="subtitle1" display="block" gutterBottom>
                    <AllOutIcon /> Examiner
                  <Typography variant="caption" display="block" gutterBottom>
                      Deep examine KPI for better business descisions
                </Typography>
                  </Typography>

                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Typography variant="subtitle1" display="block" >
                    <CompareIcon /> Quick Compare
                  <Typography variant="caption" display="block" >
                      Compare different states of KPI's side by side
                </Typography>
                  </Typography>

                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Typography variant="subtitle1" display="block" >
                    <ShareIcon />Share
                </Typography>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Typography variant="subtitle1" display="block" >
                    <ReportProblemIcon />Alert
                </Typography>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Typography variant="subtitle1" display="block" >
                    <PublishIcon />Export
                </Typography>
                </MenuItem>

              </Menu>
            </div>
            </div>
          </Paper>
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          <Paper className={classes.graphCard}>

          </Paper>
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          <Paper className={classes.graphCard}>

          </Paper>
        </Grid>
        <Grid
          item
          lg={4}
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
