import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
  CardHeight: {
    height: '100%'
  },
  CardInnerHeight: {
    height: '50%'
  },
  cardTitle:{ 
    padding: '15px 20px',
    borderBottom: '1px solid #dedede',
    "& h4": {
        marginBottom: '5px',
    }
  },
});
export default function AllDashboardReadingCard() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <React.Fragment>
      <div className={classes.CardHeight}>
        <div className={classes.cardTitle}>
          <Typography variant="h4" >
           Auto Insurance Claim
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            Last Data Refreshed: <b>Yesterday</b>
          </Typography>
        </div>
      </div>
    </React.Fragment>
  );
}