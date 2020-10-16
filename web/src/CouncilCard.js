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
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      square: true      
    },
    innerGrid: {
      spacing: 1
    }
  }));


  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Grid container className={classes.innerGrid}>
              <Grid item xs={4}>
                <div>
                  <Typography>Paper</Typography>
                  {createCollectionRender('Paper')}
                </div>
              </Grid>
              <Grid item xs={4}>
                <div>
                  <Typography>Cardboard</Typography>
                  {createCollectionRender('Cardboard')}
                </div>
              </Grid>
              <Grid item xs={4}>
                <div>
                  <Typography>Tetra Pak</Typography>
                  {createCollectionRender('Tetra Pak')}
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Grid container className={classes.innerGrid}>
              <Grid item xs={6}>
                <div>
                  <Typography>Glass</Typography>
                  {createCollectionRender('Glass')}
                </div>
              </Grid>
              <Grid item xs={6}>
                <div>
                  <Typography>Cans/Tins</Typography>
                  {createCollectionRender('Cans/Tins')}
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Grid container className={classes.innerGrid}>
              <Grid item xs={4}>
                <div>
                  <Typography>Plastics 1 &amp; 2</Typography>
                  {createCollectionRender('Plastics 1&2')}
                </div>
              </Grid>
              <Grid item xs={4}>
                <div>
                  <Typography>Plastics 5</Typography>
                  {createCollectionRender('Plastics 5')}
                </div>
              </Grid>
              <Grid item xs={4}>
                <div>
                  <Typography>Lids</Typography>
                  {createYesNoRender('Lids')}
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Grid container className={classes.innerGrid}>
              <Grid item xs={6}>
                <div>
                  <Typography>Garden Waste</Typography>
                  {createCollectionRender('Green waste')}
                </div>
              </Grid>
              <Grid item xs={6}>
                <div>
                  <Typography>Food Scraps</Typography>
                  {createCollectionRender('Food scraps')}
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Grid container className={classes.innerGrid}>
              <Grid item xs={4}>
                <div>
                  <Typography>Plastics 4</Typography>
                  {createCollectionRender('Plastics 4 LDPE')}
                </div>
              </Grid>
              <Grid item xs={4}>
                <div>
                  <Typography>Plastics 6</Typography>
                  {createCollectionRender('Plastics 6 PS')}
                </div>
              </Grid>
              <Grid item xs={4}>
                <div>
                  <Typography>Plastics 7</Typography>
                  {createCollectionRender('Plastics 7 Other')}
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Grid container className={classes.innerGrid}>
              <Grid item xs={6}>
                <div>
                  <Typography>Plastic Bags</Typography>
                  {createCollectionRender('Plastic bags')}
                </div>
              </Grid>
              <Grid item xs={6}>
                <div>
                  <Typography>Expanded Polystyrene</Typography>
                  {createCollectionRender('Plastics 6 EPS')}
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {council['Notes'] && <Grid item xs={10}>
          <Paper className={classes.paper}>
            <Typography>{council['Notes']}</Typography>
          </Paper>
        </Grid>}

      </Grid>
    </div>
  );
}