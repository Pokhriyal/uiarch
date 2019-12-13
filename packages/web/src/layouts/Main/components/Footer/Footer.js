import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Link,  } from '@material-ui/core';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import NotificationsIcon from '@material-ui/icons/Notifications';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor:theme.palette.primary.main,
    color:theme.palette.primary.contrastText,
    },
    bottomNavigationColor: {
      color:theme.palette.secondary.contrastText,
    }
}));



const Footer = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >


    <BottomNavigation 
    value={value} onChange={handleChange} className={classes.root} selected={classes.bottomNavigationColor}>
      <BottomNavigationAction className={classes.bottomNavigationColor} label="Home" value="home"  icon={<HomeOutlinedIcon />} />
      <BottomNavigationAction className={classes.bottomNavigationColor} color="inherit" label="Dashboard" value="dashboard" icon={<DashboardOutlinedIcon />} />
      <BottomNavigationAction className={classes.bottomNavigationColor} label="Search" value="search" icon={<SearchOutlinedIcon />} />
      <BottomNavigationAction className={classes.bottomNavigationColor} label="Notifications" value="notifications" icon={<NotificationsIcon />} />
    </BottomNavigation>


      {/* <Typography variant="body1">
        &copy;{' '}
        <Link
          component="a"
          href="https://devias.io/"
          target="_blank"
        >
          Devias IO
        </Link>
        . 2019
      </Typography>
      <Typography variant="caption">
        Created with love for the environment. By designers and developers who
        love to work together in offices!
      </Typography> */}
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
