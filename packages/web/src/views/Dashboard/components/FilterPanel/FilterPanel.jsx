import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    filter: {
        display: 'flex'
    },
    space: {
        marginRight: '12px'
    },
    bdypadding : {
        padding: '15px'
    },
    textRight: {
        textAlign: 'right'
        
    }
}));
export default function FilterPanel() {
    const classes = useStyles();
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
                        <Button variant="outlined"><AddIcon />Add Filters</Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
