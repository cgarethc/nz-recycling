import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import HouseIcon from '@material-ui/icons/House';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import Tooltip from '@material-ui/core/Tooltip';
import CheckIcon from '@material-ui/icons/Check';
import { makeStyles } from '@material-ui/core/styles';

export default function CouncilCard(props) {

  const council = props.council;

  const councilRender = () => <Typography color="textPrimary"><a href={council['Recycling info']} target="_blank" rel="noopener noreferrer">{council['Council']}</a></Typography>;

  const createCollectionRender = (field) => {

    const fieldValue = council[field];

    let icon;
    if (fieldValue.startsWith('K')) {
      icon = <Tooltip title={`${field} kerbside pickup`} aria-label="kerbside pickup"><HouseIcon /></Tooltip>;
    }
    else if (fieldValue.startsWith('D')) {
      icon = <Tooltip title={`Drop off ${field} at collection point`} aria-label="drop off"><LocalShippingIcon color='secondary' /></Tooltip>;
    }
    else {
      icon = <Tooltip title={`${field} not recycled`} aria-label="not recycled"><NotInterestedIcon color='error' /></Tooltip>;
    }

    if (fieldValue.endsWith('$')) {
      icon = <>{icon}<Tooltip title="Charges apply" aria-label="charges apply"><MonetizationOnIcon color='error' /></Tooltip></>;
    }

    return icon;

  };

  const createYesNoRender = (field) => {

    const fieldValue = council[field];
    let icon;
    if (fieldValue === 'Y') {
      icon = <Tooltip title={`${field} yes`} aria-label="yes"><CheckIcon /></Tooltip>;
    }
    else {
      icon = <Tooltip title={`${field} no`} aria-label="no"><NotInterestedIcon color='error' /></Tooltip>;
    }
    return icon;

  };

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


  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <Typography>Paper</Typography>
                  {createCollectionRender('Paper')}
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <Typography>Cardboard</Typography>
                  {createCollectionRender('Cardboard')}
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <Typography>Tetra Pak</Typography>
                  {createCollectionRender('Tetra Pak')}
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <Typography>Glass</Typography>
                  {createCollectionRender('Glass')}
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <Typography>Cans/Tins</Typography>
                  {createCollectionRender('Cans/Tins')}
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <Typography>Plastics 1 &amp; 2</Typography>
                  {createCollectionRender('Plastics 1&2')}
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <Typography>Plastics 5</Typography>
                  {createCollectionRender('Plastics 5')}
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper} square={true}>
                  <Typography>Lids</Typography>
                  {createYesNoRender('Lids')}
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <Typography>Garden Waste</Typography>
                  {createCollectionRender('Green waste')}
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <Typography>Food Scraps</Typography>
                  {createCollectionRender('Food scraps')}
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <Typography>Plastics 4</Typography>
                  {createCollectionRender('Plastics 4 LDPE')}
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <Typography>Plastics 6</Typography>
                  {createCollectionRender('Plastics 6 PS')}
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper} square={true}>
                  <Typography>Plastics 7</Typography>
                  {createCollectionRender('Plastics 7 Other')}
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <Typography>Plastic Bags</Typography>
                  {createCollectionRender('Plastic bags')}
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <Typography>Expanded Polystyrene</Typography>
                  {createCollectionRender('Plastics 6 EPS')}
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}