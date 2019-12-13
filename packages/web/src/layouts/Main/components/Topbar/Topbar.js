import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Badge, Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  },
  logoWidth: {
    width: '116px'
  },
  MainNavigation: {
    color: 'red',
    '& > * + *': {
      marginLeft: theme.spacing(4),
      
    },
  }
}));



const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;

  const classes = useStyles();

  const [notifications] = useState([]);
  const preventDefault = event => event.preventDefault();

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Toolbar>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <RouterLink to="/">
          <img className={classes.logoWidth}
            alt="Logo"
            src="/images/logos/download.png"
          />
        </RouterLink>
        
        
        <Hidden mdDown>

          <Typography className={classes.MainNavigation}>
            <Link href="#" onClick={preventDefault} color="inherit">
              Link
            </Link>
            <Link href="#" onClick={preventDefault} color="inherit">
              Link
            </Link>
            <Link href="#" onClick={preventDefault} color="inherit">
              Link
            </Link>
            {/* <Link href="#" onClick={preventDefault} color="inherit">
              {'color="inherit"'}
            </Link>
            <Link href="#" onClick={preventDefault} variant="body2">
              {'variant="body2"'}
            </Link> */}
          </Typography>
          <div className={classes.flexGrow} />
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            className={classes.signOutButton}
            color="inherit"
          >
            <InputIcon />
          </IconButton>
        </Hidden>
        
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
