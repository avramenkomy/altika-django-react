import React from 'react';
import { Container, Paper, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ExpertiseCard from './ExpertiseCard';

import decoration0 from '../../resources/img/types_of_expertise/calculator.jpeg';
import decoration1 from '../../resources/img/types_of_expertise/fingers_print.jpeg';
import decoration2 from '../../resources/img/types_of_expertise/home.jpg';
import decoration3 from '../../resources/img/types_of_expertise/lupa_400x400.jpeg';
import decoration4 from '../../resources/img/types_of_expertise/molotok.jpeg';
import decoration5 from '../../resources/img/types_of_expertise/transport.jpeg';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  title: {
    textAlign: 'center',
  },
  wrapper: {
    textAlign: 'center',
  },
}));


const expertiseTypes = [
  {id: 0, title: 'Тип экспертизы 1', url: decoration0, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac euismod justo. Duis consequat nibhvel est dignissim consequat. Mauris lobortis lobortis convallis. Pellentesque hendrerit iaculis justo, nec rhoncus eros. Nam id leo nec eros dignissim posuere.'},
  {id: 1, title: 'Тип экспертизы 2', url: decoration1, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac euismod justo. Duis consequat nibhvel est dignissim consequat. Mauris lobortis lobortis convallis. Pellentesque hendrerit iaculis justo, nec rhoncus eros. Nam id leo nec eros dignissim posuere.'},
  {id: 2, title: 'Тип экспертизы 3', url: decoration2, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac euismod justo. Duis consequat nibhvel est dignissim consequat. Mauris lobortis lobortis convallis. Pellentesque hendrerit iaculis justo, nec rhoncus eros. Nam id leo nec eros dignissim posuere.'},
  {id: 3, title: 'Тип экспертизы 4', url: decoration3, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac euismod justo. Duis consequat nibhvel est dignissim consequat. Mauris lobortis lobortis convallis. Pellentesque hendrerit iaculis justo, nec rhoncus eros. Nam id leo nec eros dignissim posuere.'},
  {id: 4, title: 'Тип экспертизы 5', url: decoration4, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac euismod justo. Duis consequat nibhvel est dignissim consequat. Mauris lobortis lobortis convallis. Pellentesque hendrerit iaculis justo, nec rhoncus eros. Nam id leo nec eros dignissim posuere.'},
  {id: 5, title: 'Тип экспертизы 6', url: decoration5, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac euismod justo. Duis consequat nibhvel est dignissim consequat. Mauris lobortis lobortis convallis. Pellentesque hendrerit iaculis justo, nec rhoncus eros. Nam id leo nec eros dignissim posuere.'},
];

function ExpertiseTypes() {
  const classes = useStyles();

  return (
    <Paper square className={classes.root}>
      <Container maxWidth={"lg"}>
        <Typography variant="h5" className={classes.title}>
          Виды экспертиз
        </Typography>
        <Grid container>
          {
            expertiseTypes.map((item) => {
              return (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                  <ExpertiseCard {...item} />
                </Grid>
              )
            })
          }
        </Grid>
      </Container>
    </Paper>
  )
}

export default ExpertiseTypes;