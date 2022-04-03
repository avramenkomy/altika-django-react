import React from 'react';
import { Paper, Container, Grid, Typography } from '@material-ui/core';
import { Hidden } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import ListItemsComponent from './ListItemsComponent';
import ContactsComponent from './ContactsComponent';
import SocialComponent from './SocialComponent';
import MapsComponent from './MapsComponent';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(0deg, #256EA4, #508BB6 50%)',
    color: theme.palette.secondary.light
  },
  bottom_container: {
    backgroundColor: 'rgba(0, 0, 0, .2)',
  },
  bottom_text: {
    textAlign: 'center'
  },
  item: {
    maxWidth: '100%'
  }
}));

function FooterComponent() {
  const classes = useStyles();

  const widthMore600 = useMediaQuery('(min-width:600px)');
  const direction = widthMore600 ? 'row' : 'column';
  
  return (
    <Paper className={classes.root} square>
      <Grid container direction={direction}>

        <Grid item sm={6} md={3} container direction="column" justifyContent="space-between">
          <Grid item className={classes.item}>
            <ListItemsComponent />
          </Grid>
          <Hidden only={["xs"]}>
          <Grid item className={classes.item}>
            <SocialComponent />
          </Grid>
          </Hidden>
        </Grid>

        <Grid item sm={6} md={3} justifyContent="center">
          <ContactsComponent />
        </Grid>

        <Hidden only={["sm", "md", "lg", "xl"]}>
          <Grid item sm={12} md={4}>
            <SocialComponent />
          </Grid>
        </Hidden>

        <Grid item sm={12} md={6}>
          <MapsComponent width="100%" height="350" />
        </Grid>

      </Grid>
      <Grid container className={classes.bottom_container}>
        <Container>
          <Typography className={classes.bottom_text} variant="body2">
            ООО "Альтика и далее полное наименование"<br />
            ИНН 123456788, КПП 123456788, ОГРН 123456788<br />
          </Typography>
          
          <Typography className={classes.bottom_text} variant="body2">&#169;&nbsp;2022 Все права защищены</Typography>
        </Container>
      </Grid>
    </Paper>
  )
}

export default FooterComponent;
