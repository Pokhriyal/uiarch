import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles'; import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
const useStyles = makeStyles(theme => ({
    filter: {
        display: 'flex'
    },
    list: {
        width: 350,
      },
    space: {
        marginRight: '12px',
        '& h6': {
            fontSize: '13px',
            color: '#707070',
        }
    },
    bdypadding: {
        padding: '15px'
    },
    textRight: {       
        textAlign: 'right',
        '& button': {
            fontSize: '12px',
            textTransform: 'capitalize',
            '& svg' :{
                fontSize: '17px',
                marginRight: '3px',
            }
        }
        
    }
}));
export default function FilterPanel() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };
    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
           <div>
           <Typography variant="body2">
                                <b>Filters</b>
            </Typography>
           </div>
        </div>
    );
    return (
        <div >
            <div >
                <Grid container className={classes.bdypadding}>
                    <Grid item xs={6} className={classes.filter}>
                        <div className={classes.space} >
                            <Typography variant="subtitle2">
                                Date Ends:
                            </Typography>
                            <Typography variant="caption">
                                <b>31-Dec-2018</b>
                            </Typography>
                        </div>
                        <div className={classes.space}>
                            <Typography variant="subtitle2">
                                Region
                            </Typography>
                            <Typography variant="caption">
                                <b>31-Dec-2018</b>
                            </Typography>
                        </div>
                        <div className={classes.space}>
                            <Typography variant="subtitle2">
                                Month
                            </Typography>
                            <Typography variant="caption">
                                <b>31-Dec-2018</b>
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={6} className={classes.textRight}>
                        <Button size="small" color="default" onClick={toggleDrawer('right', true)} variant="contained"><AddIcon />Add Filters</Button>
                        <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
                        {sideList('right')}
                    </Drawer>
                    </Grid>
                   
                </Grid>
            </div>
        </div>
    )
}
