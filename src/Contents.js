import React from 'react';
import './App.css';
import ChartAcceleration from './ChartAcceleration'
import ChartBattery from './ChartBattery'
import CurrentBattery from './CurrentBattery'
import ChartHumidity from './ChartHumidity'
import ChartTemp from './ChartTemp'
import CurrentHumidity from './CurrentHumidity'
import CurrentTemp from './CurrentTemp'
import CurrentDevice from './CurrentDevice'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import RecentTime from './RecentTime'
import TimeFrameButtons from './TimeFrameButtons'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Contents() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <h2>Recent</h2><RecentTime/>
      <p></p>
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <CurrentDevice />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <CurrentTemp />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <CurrentHumidity/>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <CurrentBattery/>
          </Paper>
        </Grid>
        
        </Grid>
        <br></br>
        {/* <Divider variant="middle" /> */}
        <h2>Charts</h2>
        <Button>1 day</Button>
        <Button>1 week</Button>
        <Button>1 month</Button>
        <p></p>
        <Grid container spacing={4}>

      {/* </Grid> */}
      <Grid item xs={3}>
        <Paper className={classes.paper}>
          <ChartAcceleration />
        </Paper>
        </Grid>
        <Grid item xs={3}>
        <Paper className={classes.paper}>
            <ChartTemp />
        </Paper>
        </Grid>
        <Grid item xs={3}>
        <Paper className={classes.paper}>
            <ChartHumidity />
          </Paper>
        </Grid>
        <Grid item xs={3}>
        <Paper className={classes.paper}>
            <ChartBattery />
        </Paper>
        </Grid>
        </Grid>
    </div>
  );
}

export default Contents;