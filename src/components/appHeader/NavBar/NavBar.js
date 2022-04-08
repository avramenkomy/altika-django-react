import React from 'react';
import { Toolbar, Link } from '@material-ui/core';
import { Grid } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: theme.spacing(1),
  },
  link: {
    fontFamily: '"Roboto Condensed", sans-serif',
  },
  textAlignCenter: {
    textAlign: 'center',
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  const widthMore800 = useMediaQuery('(min-width:800px)');

  const rootStyle = clsx({
    [classes.root] : true,
    [classes.textAlignCenter] : widthMore800
  });

  return (
    <Toolbar disableGutters className={classes.root}>
      <Grid container className={rootStyle} alignContent="center" alignItems="center">
        <Grid item xs={12} md={3}>
            <Link href="#" className={classes.link} variant="h6" onClick={preventDefault} color="secondary" underline="none">
              О нас
            </Link>
        </Grid>
        <Grid item xs={12} md={3}>
            <Link href="#" className={classes.link} variant="h6" onClick={preventDefault} color="secondary" underline="none">
              Услуги
            </Link>
        </Grid>
        <Grid item xs={12} md={3}>
            <Link href="#" className={classes.link} variant="h6" onClick={preventDefault} color="secondary" underline="none">
              Виды экспертиз
            </Link>
        </Grid>
        <Grid item xs={12} md={3}>
          <Link href="#" className={classes.link} variant="h6" onClick={preventDefault} color="secondary" underline="none">
            Контакты
          </Link>
        </Grid>
      </Grid>
    </Toolbar>
  )
}