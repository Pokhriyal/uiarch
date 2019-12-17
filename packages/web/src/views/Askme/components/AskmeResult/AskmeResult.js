import React from 'react';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { Grid, Typography, Button, Paper, Tabs, Tab, Box, AppBar, List, ListItem, ListItemAvatar } from '@material-ui/core';
import { TabExpandView } from '../../../Dashboard/components';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import PublishIcon from '@material-ui/icons/Publish';
import CloseIcon from '@material-ui/icons/Close';
import EmailIcon from '@material-ui/icons/Email';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  content: {
    paddingTop: 150,
    textAlign: 'center'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    border: '1px solid #a8a8a8',
    height: '100px'
  },
  image: {
    marginTop: 50,
    display: 'inline-block',
    maxWidth: '100%',
    width: 560
  },
  titleActions: {
    textAlign: 'right',
    position: 'relative',
    top: '8px',
  },
  btncolor: {
    color: 'gray',
    fontSize: '12px',
    marginRight: '10px',
    textTransform: 'capitalize',
    "&:hover": {
      background: 'transparent'
    },
    '& svg': {
      color: 'grey',
      fontSize: '18px',
      marginRight: '5px',
      marginTop: '-3px',
    }
  },
  askmeSearch: {
    display: 'flex',
    alignItems: 'center',
    padding: '0  12px'
  },
  askmeResultCard: {
    padding: '12px',
    height: '100vh'
  },
  searchGraph: {
    height: '100vh'
  },
  graphTab: {
    width: '60px',
    borderLeft: '1px solid #dedede',
    paddingTop: '48px',
    "& div": {
      height: '60px',
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
    
    }, 
    "& .active": {
      background: '#f1f1f1',
      borderLeft: '6px solid blue'
    }
  },
  askmeGraph: {
    width: 'calc(100% - 480px)',
    boxShadow: '3px 0px 7px 0px #dedede'
  },
  graphTabPanel: {
    width: '420px',
  },
  displayFlex: {
    display: 'flex'
  },
  searchGraphHeight: {
    height: '100%'
  },
  panelHead: {
    borderBottom: '1px solid #dedede',
    padding: '0 12px',
    display: 'flex',
    alignItems: 'center',
    marginTop: '12px',
    "& h5": {
      borderBottom: '6px solid #3078fb',
      padding: '5px'
    }
  },
  closeIcon: {
    marginLeft: 'auto',
    position: 'relative',
    top: '-5px'
  },
  gridSpacing: {
    width: '100%',
    margin: '0',
    padding: '10px 5px'
  },
  gridPadding: {
    padding: '15px 0 0'
  }
}));
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const AskmeResult = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <TabExpandView />
      <div className={classes.askMeHead}>

      </div>
      <div>
        <Grid container className={classes.gridPadding}>
          <Grid item xs={7} className={classes.askmeSearch}>
            <SearchIcon />
            <Typography variant="h5" component="h5" fontWeight="fontWeightRegular">
              Spend amount where payment term is immediate NY supplier by buyer
            </Typography>
          </Grid>
          <Grid item xs={5} className={classes.titleActions}>
            <div>
              <Button size="medium" className={classes.btncolor}>
                <ShareIcon />Share
              </Button>
              <Button size="large" className={classes.btncolor}>
                <EditLocationIcon />Pin
              </Button>
              <Button size="large" className={classes.btncolor}>
                <EmailIcon />Email
              </Button>
              <Button size="large" className={classes.btncolor}>
                <PublishIcon />Export
              </Button>
              <IconButton size="small">
                <MoreVertIcon />
              </IconButton>
            </div>
          </Grid>
        </Grid>
        <div className={classes.askmeResultCard}>
          <Paper className={`${classes.displayFlex} ${classes.searchGraphHeight}`}>
            <div className={classes.askmeGraph}>
              hi
            </div>
            <div className={classes.graphTabPanel}>
              <div className={classes.panelHead}>

                <Typography variant="h5" component="h5" fontWeight="fontWeightRegular">
                  Visualizations
                  </Typography>


                <CloseIcon className={classes.closeIcon} />
              </div>
              <div>
                <div className={classes.root}>
                  <Grid container spacing={3} className={classes.gridSpacing}>
                    <Grid item xs={4}>
                      <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={4}>
                      <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={4}>
                      <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
            <div className={classes.graphTab}>
              <div >
                <InfoOutlinedIcon />
              </div>
              <div className="active">
                <AssessmentOutlinedIcon />
              </div>
            </div>
          </Paper>
      </div>
    </div>
    </div >
  );
};

export default AskmeResult;
