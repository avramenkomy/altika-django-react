import React from 'react';
import { Toolbar, Link } from '@material-ui/core';
import { Grid } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: theme.spacing(1),
  },
  link: {
    fontFamily: '"Roboto Condensed", sans-serif',
    '& > a': {
      textDecoration: 'none',
      color: '#e0e1e2'
    },
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
              <AnchorLink offset='100' href="#about">О нас</AnchorLink>
            </Link>
        </Grid>
        <Grid item xs={12} md={3}>
            <Link href="#" className={classes.link} variant="h6" onClick={preventDefault} color="secondary" underline="none">
              <AnchorLink offset='100' href="#services">Услуги</AnchorLink>
            </Link>
        </Grid>
        <Grid item xs={12} md={3}>
            <Link href="#" className={classes.link} variant="h6" onClick={preventDefault} color="secondary" underline="none">
              <AnchorLink offset='100' href="#expertise_types">Виды экспертиз</AnchorLink>
            </Link>
        </Grid>
        <Grid item xs={12} md={3}>
          <Link href="#" className={classes.link} variant="h6" onClick={preventDefault} color="secondary" underline="none">
            <AnchorLink offset='100' href='#contacts'>Контакты</AnchorLink>
          </Link>
        </Grid>
      </Grid>
    </Toolbar>
  )
}