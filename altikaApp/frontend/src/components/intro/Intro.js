import React from 'react';
import { Container, Grid, Paper, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import OrderModal from './OrderModal';

import decoration from '../../resources/img/background_image/expert_man.jpeg';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${decoration})`,
    position: 'relative',
    paddingTop: '80px',
    paddingBottom: '80px',
    backgroundColor: '#fff',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  dark_shadow: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0,0,0,.58)',
  },
  wrapper: {
    position: 'relative',
  },
  title: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  subtitle: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  items: {
    textAlign: 'center',
  },
  actionBtn: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function Intro () {
  const classes = useStyles();

  const [openModal, setOpenModal] = React.useState(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  }

  return (
    <>
      <OrderModal open={openModal} onClose={handleCloseModal} />
      <Paper className={classes.root}>
        <Container>
          <div className={classes.dark_shadow} />
          <Grid container direction="column" className={classes.wrapper} alignItems="center">

            <Grid item xs={6} sm={8} className={classes.items}>
              <Typography className={classes.title} variant="h2" component="h1" color="secondary">
                Услуги независимой экспертизы и оценки
              </Typography>
            </Grid>

            <Grid item xs={6} sm={8} className={classes.items}>
              <Typography className={classes.subtitle} variant="subtitle1" color="secondary" gutterBottom paragraph>
                Задайте вопросы менеджеру по телефону 8 800 333 22 33
              </Typography>
            </Grid>

            <Grid item md={6} className={classes.items}>
              <Button className={classes.actionBtn} onClick={ () => setOpenModal(true) } variant="contained" color="secondary" size="large">Оставить заявку</Button>
              <Typography variant="body2" component="div" color="secondary" gutterBottom paragraph>
                Или просто оставьте заявку на сайте
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </>
  )
}

export default Intro;