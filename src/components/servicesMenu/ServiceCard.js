import React from 'react';
import { Typography, Divider, Button, Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import './ServiceCard.css';
import OrderModal from '../intro/OrderModal';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
  media: {
    height: 200,
  },
  card: {
    textAlign: 'center',
  },
  service: {
    display: 'flex',
    flexDirection: 'row',
  },
  service__card: {
    width: '40vw',
    background: '#F2F2F2',
    textAlign: 'center',
  },
  service__title: {
    margin: theme.spacing(3),
    textAlign: 'center',
  },
  service__price: {
    margin: theme.spacing(2),
    textAlign: 'center',
  },
  service_desc: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  actionBtn: {
    margin: theme.spacing(2),
    textAlign: 'center',
  },
}));


function ServiceCard({title, price, description, url, darkMode}) {
  const classes = useStyles();

  const [openModal, setOpenModal] = React.useState(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  }

  return (
    <div className={classes.root}>
      <OrderModal open={openModal} onClose={handleCloseModal} />
      <Container>
        <div className="wrapper">
          <div className="container_1">
          <div className={classes.service__title}>
            <Typography gutterBottom variant="h4" component="h2">{title}</Typography>
          </div>
          <Divider />
          <div className={classes.service__price}>
            <Typography gutterBottom variant="h6" component="span">Стоимость услуги: </Typography>
            <Typography gutterBottom variant="h6" component="span">{price}</Typography>
          </div>
          <Divider />
          <div className={classes.actionBtn}>
            <Button onClick={ () => setOpenModal(true) } variant="contained" color="primary" size="small">Оставить заявку</Button>
          </div>
          </div>
          
          <div className="container_2">
            <div className="dark_shadow" />
            <Box
              className={classes.service_desc}
              style={{
                backgroundImage: `url(${url})`,
                minHeight: '400px',
                display: 'flex',
                alignItems: 'center',
                borderRadius: '10px',
              }}
            >
              <div className="title__content">
                <Typography component="p" variant="h6">
                  {description}
                </Typography>
              </div>
            </Box>
          </div>
        </div>
      </Container>
      
    </div>
  )
}

export default ServiceCard;