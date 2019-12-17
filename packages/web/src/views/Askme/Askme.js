import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Card, CardContent, AppBar, Tab, Tabs } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import Box from '@material-ui/core/Box';
import DraftsIcon from '@material-ui/icons/Drafts';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import List from '@material-ui/core/List';
import InboxIcon from '@material-ui/icons/Inbox';
import RestoreIcon from '@material-ui/icons/Restore';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}



const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    padding: '2px 4px',
    display: 'flex',
    width: '100%',
    alignItems: 'center',
  },
  content: {
    paddingTop: 150,
    textAlign: 'center'
  },
  image: {
    width: 560,
    marginTop: 50,
    maxWidth: '100%',
    display: 'inline-block',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  askmesearchContainer: {
    width: '100%',
    margin: '0 auto',
    textAlign: 'center',
    position: 'relative',
    height: 'calc(100vh - 124px)',
  },
  aa: {
    right: '0',
    left: '50%',
    top: '50%',
    width: '70%',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    '& h1': {
      marginBottom: '15px',
      fontWeight: '300',
      fontSize: '30px',
    }
  },
  searchList: {
    marginTop: '5px',
    '& .MuiAppBar-colorPrimary': {
      color: '#333',
      boxShadow: 'none',
      background: 'none',
      borderBottom: '1px solid #f3f3f3',
      '& a': {
        flexShrink: '1',
        maxWidth: 'none',
        color: '#707070',
        fontWeight: '300',
        flexGrow: 'inherit',
        flexBasis: 'inherit',
        textTransform: 'uppercase',
      }
    },    
  },
  
  spanremove: {
    display: 'none',
    fontSize: '12px',
    cursor: 'pointer',
    padding: '0px 15px',
    background: '#fec7c7',
    borderRadius: '20px',
    border: '1px solid #ffadad',
  },

  listHover: {
    '&:hover': {
      '& $spanremove': {
        display: 'block'
      }
    },
    '& svg'  : {
      fontSize: '20px',
      color : '#707070',
    }   
  },
  MuiListItemIconRoot : {
    minWidth: '40px',
  }

}));



const Askme = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.askmesearchContainer}>
        <div className={classes.aa}>
          <h1>AskMe</h1>
          <Paper component="form" className={classes.root}>
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              className={classes.input}
              placeholder="Start getting smart business insights"
              inputProps={{ 'aria-label': 'search google maps' }}
            />

            <IconButton className={classes.iconButton} aria-label="menu">
              <MicIcon />
            </IconButton>
          </Paper>
          <div className={classes.searchList}>
            <Card className={classes.card}>
              <AppBar position="static">
                <Tabs
                  variant="fullWidth"
                  value={value}
                  onChange={handleChange}
                  aria-label="nav tabs example"
                  className={classes.headertabs}
                >
                  <LinkTab label="Suggestions" href="/drafts" {...a11yProps(0)} />
                  <LinkTab label="Recent Searches" href="/trash" {...a11yProps(1)} />
                  <LinkTab label="Trending Searches" href="/spam" {...a11yProps(2)} />
                </Tabs>
              </AppBar>
              <TabPanel value={value} index={0} >
                <List style={{margin: -24}}>
                  <ListItem button className={classes.listHover}>
                    <ListItemIcon>
                      <SearchIcon />
                    </ListItemIcon>
                    <ListItemText primary="AHT" /> <label className={classes.spanremove}>remove</label>
                  </ListItem>
                </List>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <List style={{margin: -24}}>
                  <ListItem button className={classes.listHover}>
                    <ListItemIcon>
                      <RestoreIcon />
                    </ListItemIcon>
                    <ListItemText primary="Spend by region" /> <label className={classes.spanremove}>remove</label>
                  </ListItem>
                </List>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <List style={{margin: -24}}>
                  <ListItem button className={classes.listHover}>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Show me walled lake corresponding to wallance" /> <label className={classes.spanremove}>remove</label>
                  </ListItem>
                </List>
              </TabPanel>
            </Card>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Askme;
