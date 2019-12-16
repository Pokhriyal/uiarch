import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles'; import Button from '@material-ui/core/Button';
import FilterListIcon from '@material-ui/icons/FilterList';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
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
            '& svg': {
                fontSize: '17px',
                marginRight: '3px',
            }
        }

    },
    filterHead: {
        padding: '5px'
    },
    filterDrawerTop: {
        paddingTop: '10px',
        paddingBottom: '5px',
        display: 'flex',
        borderBottom: '1px solid #dedede'
    },
    filterDrawerCta: {
        position: 'absolute',
        bottom: '0',
        borderTop: '1px solid #dedede',
        width: '100%',
        textAlign: 'right',
        padding: '5px',
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
    const handleChange = name => event => {
        setState({
          ...state,
          [name]: event.target.value,
        });
      };
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
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
                <div className={classes.filterDrawerTop}>
                    <div className={classes.filterHead}>
                        <FilterListIcon />
                    </div>
                    <div className={classes.filterHead}>
                        <Typography variant="h4">
                            Filters
                        </Typography>
                    </div>
                </div>
                <div>
                    Lists
                </div>
                <div className={classes.filterDrawerCta}>
                    <div>

                        <Button variant="contained">Cancel</Button>
                        <Button variant="contained">Reset</Button>
                        <Button variant="contained" color="primary">
                            Apply
                        </Button>
                    </div>
                </div>
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
