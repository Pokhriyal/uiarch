import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
  textCenter: {
    textAlign: 'center',
    '& p': {
      fontSize: '20px',
    }
  },
  upperCardSubContainer: {
    marginTop: '10px',
    alignItems: 'center',
  },
  borderRight: {
    borderRight: '1px solid #eceef5',
    background: '#f4f5f9'
  },
  subMargin: {
    paddingLeft: '25px',
    height: 'calc(100% - 20px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    
  },
  subFontSize: {
    fontSize: '15px',
    fontWeight: 'bold',
  },
  CardHeight: {
    height: '100%'
  },
  CardInnerHeight: {
    height: '50%'
  },
  subcardBtm: {
    color: '#03A9F4',
    fontSize: '13px',    
  }
});
export default function ReadingCard() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <React.Fragment>
      <div className={classes.CardHeight}>
        <div className={`${classes.textCenter} ${classes.CardInnerHeight}`}>
          <Typography component="p" variant="h2" >
            $3,024.00
        </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            Premium recieved
        </Typography>
        </div>
        <Grid container className={`${classes.upperCardSubContainer} ${classes.CardInnerHeight}`}>
          <Grid item xs={6} className={`${classes.borderRight} ${classes.subMargin}`}>
            <Typography component="p" variant="h2" className={classes.subFontSize}  >
              $3,024.00
            </Typography>
            <Typography variant="caption" display="block" >
              Premium recieved
            </Typography>
          </Grid>
          <Grid item xs={6} className={`${classes.borderRight} ${classes.subMargin}`}>
            <Typography component="p" variant="h2" className={classes.subFontSize} >
              $3,024.00
            </Typography>
            <Typography variant="caption" display="block" >
              Premium recieved
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.textCenter}>
            <Typography component="label" variant="subtitle1" fontWeight="fontWeightMedium" className={classes.subcardBtm} >
              8.45% Higher
            </Typography>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}