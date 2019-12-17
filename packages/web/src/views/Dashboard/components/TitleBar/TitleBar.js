import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh';
import ShareIcon from '@material-ui/icons/Share';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import PublishIcon from '@material-ui/icons/Publish';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Fab from '@material-ui/core/Fab';
const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        padding: '15px',
        paddingTop: '30px',
        background: '#ffff',
    },
    h4: {
        fontWeight: 'normal',
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
            marginTop:'-3px',
        }      
    }
}));
export default function TitleBar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={5}>
                    <Typography variant="h4" component="h2" fontWeight="fontWeightRegular">
                        Auto Insurance Claim 2.0
                </Typography>
                    <Typography variant="caption" gutterBottom>
                        Last Data Refreshed: <b>Yesterday</b>
                    </Typography>
                </Grid>
                <Grid item xs={7} className={classes.titleActions}>
                    <div>
                        <Button size="small" className={classes.btncolor}>
                            <RefreshIcon />Refresh
                        </Button>
                        <Button size="medium" className={classes.btncolor}>
                            <ShareIcon />Share
                        </Button>
                        <Button size="large" className={classes.btncolor}>
                            <ReportProblemIcon />Alert
                        </Button>
                        <Button size="large" className={classes.btncolor}>
                            <PublishIcon />Export
                        </Button>
                        {/* <Fab size="small" color="default" aria-label="add" className={classes.btncolor}>
                            <MoreVertIcon />
                        </Fab> */}
                        <IconButton size="small">
                            <MoreVertIcon />
                        </IconButton>
        
                    </div>
                </Grid>

            </Grid>
        </div>
    )
}
