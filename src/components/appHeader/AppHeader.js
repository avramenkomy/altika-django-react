import React, { useState } from 'react';
import { AppBar, IconButton } from '@material-ui/core';
import { Grid } from '@mui/material';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Logo from './Logo/Logo';
import CallUs from './CallUs/CallUs';
import NavBar from './NavBar/NavBar';

import './AppHeader.css'

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(0deg, #256EA4 30%, #508BB6)',
    flexGrow: 1,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  nav: {
    flexGrow: 1,
  },
  callUs: {
    textAlign: 'center',
  },
  darkThemeButton: {
    textAlign: 'center',
  }
}));

function AppHeader(props) {
  const [dark, setDark] = useState(props.darkTheme);
  const matches960 = useMediaQuery('(min-width:960px)');

  const handleChangeTheme = () => {
    setDark(!dark);
    props.onChangeTheme(!dark);
  }

  const classes = useStyles();
    return (
      <AppBar position={matches960 ? "sticky" : "static"} className={classes.root}>
        <Grid container alignContent="center" alignItems="center">
          { matches960 &&
            <Grid item>
              <Logo />
            </Grid>
          }

          <Grid item className={classes.nav}>
            <NavBar />
          </Grid>
          <Grid className={classes.callUs}>
            <CallUs />
          </Grid>

          { matches960 &&
            <Grid item className={classes.darkThemeButton}>
              <IconButton onClick={handleChangeTheme}>
                { dark ? <Brightness4Icon color="secondary" /> : <Brightness5Icon color="secondary" /> }
              </IconButton>
            </Grid>
          }
        </Grid>
      </AppBar>
    )
  }

export default AppHeader;