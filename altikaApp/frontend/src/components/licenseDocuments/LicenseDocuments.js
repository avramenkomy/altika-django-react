import React from 'react';
import { Container, Paper, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Carousel from './Carousel';
import Item from './Item';

import license0 from '../../resources/img/license/license_1.jpeg';
import license1 from '../../resources/img/license/license_2.jpeg';
import license2 from '../../resources/img/license/license_3.jpeg';
import license3 from '../../resources/img/license/license_4.jpeg';
import license4 from '../../resources/img/license/license_5.jpeg';
import license5 from '../../resources/img/license/license_6.jpeg';
import license6 from '../../resources/img/license/license_7.jpeg';
import license7 from '../../resources/img/license/license_8.jpeg';

const documents = [
  { id: 0, title: 'Лицензия №1', url: license0, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
  { id: 1, title: 'Лицензия №2', url: license1, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
  { id: 2, title: 'Лицензия №3', url: license2, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
  { id: 3, title: 'Лицензия №4', url: license3, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
  { id: 4, title: 'Лицензия №5', url: license4, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
  { id: 5, title: 'Лицензия №6', url: license5, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
  { id: 6, title: 'Лицензия №7', url: license6, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
  { id: 7, title: 'Лицензия №8', url: license7, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
];

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  title: {
    textAlign: 'center'
  }
}));

function LicenseDocuments () {
  const classes = useStyles();

  const widthLess1280 = useMediaQuery('(max-width:1280px)');
  const widthLess800 = useMediaQuery('(max-width:800px)');
  const widthLess600 = useMediaQuery('(max-width:600px)');
  const widthLess500 = useMediaQuery('(max-width:500px)');
  let show;
  
  if (widthLess500) {
    show = 1
  } else if (!widthLess500 && widthLess600) {
    show = 2
  } else if (!widthLess500 && !widthLess600 && widthLess800) {
    show = 3
  } else if (!widthLess500 && !widthLess600 && !widthLess800 && widthLess1280) {
    show = 4
  } else {
    show = 5
  }

  return (
    <Paper square className={classes.root}>
      <Container maxWidth={"lg"}>
        <Typography variant="h5" className={classes.title}>
          Документы
        </Typography>
        <Carousel show={show}>
          {
            documents.map((item) => {
              return <Item {...item} />
            })
          }
        </Carousel>
      </Container>
    </Paper>
  )
}

export default LicenseDocuments;