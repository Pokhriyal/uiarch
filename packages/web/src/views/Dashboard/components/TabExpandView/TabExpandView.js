import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ClearIcon from '@material-ui/icons/Clear';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import { borderRight } from '@material-ui/system';
const useStyles = makeStyles( theme => ({
    root: {
        width: '100%',
        position: 'relative'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    ExpansionPanel: {
        minHeight: '15px',
        "& div": {
            margin: '0 !important',
            position: 'absolute',
            top: 'calc(100% - 11px)',
            left: '12px',
            background: 'black',
            color: 'white',
            borderRadius: '50%',
        },
       ' &.Mui-expanded': {
            minHeight: '35px',
            "& div":{
                top: 'calc(100% - 11px)',
            }
            
        }
    },
    display:{
        display: 'flex',
        borderRadius: '0 !important' 
    },
    tabWidth:{
       width: '180px',
       borderRight: '1px solid #dedede',
       height: '35px',
       display: 'flex',
       alignItems: 'center'
    },
    expansionPanel: {
        padding: '0',
        display: 'flex',
        alignItems: 'center'
    }
}));
export default function TabExpandView() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div>
                <ExpansionPanel className={classes.display}>
                    <ExpansionPanelSummary
                        className={classes.ExpansionPanel}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <MenuIcon className="ayush" />
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.expansionPanel}>
                      <div className={classes.tabWidth}>
                      <Typography variant="body2">
                            Auto Insurance claim 2.0
                           
                        </Typography>
                        <ClearIcon />
                      </div>
                      <AddIcon />
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        </React.Fragment>
    );
}