import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
const useStyles = makeStyles( theme => ({
    root: {
        width: '100%',
        position: 'relative',
        top: '-60px'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));
export default function TabExpandView() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <MenuIcon />
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        </React.Fragment>
    );
}