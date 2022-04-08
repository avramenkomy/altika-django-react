import React, { useState, useEffect } from 'react';
import { Container, Paper, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
import Carousel from './Carousel';
import Note from './Note';
import NoteMock from './NoteMock';

import axios from 'axios';

// const notes_mock = [
//   {id: 0, title: 'title of notes 1', content: 'content of notes 1', author: 'first_name_1 last_name_1', created_at: '01-01-2020', update_at: '01-02-2020'},
//   {id: 1, title: 'title of notes 2', content: 'content of notes 2', author: 'first_name_2 last_name_2', created_at: '01-01-2020', update_at: '01-02-2020'},
//   {id: 2, title: 'title of notes 3', content: 'content of notes 3', author: 'first_name_3 last_name_3', created_at: '01-01-2020', update_at: '01-02-2020'},
//   {id: 3, title: 'title of notes 4', content: 'content of notes 4', author: 'first_name_4 last_name_4', created_at: '01-01-2020', update_at: '01-02-2020'},
//   {id: 4, title: 'title of notes 5', content: 'content of notes 5', author: 'first_name_5 last_name_5', created_at: '01-01-2020', update_at: '01-02-2020'},
//   {id: 5, title: 'title of notes 6', content: 'content of notes 6', author: 'first_name_6 last_name_6', created_at: '01-01-2020', update_at: '01-02-2020'},
//   {id: 6, title: 'title of notes 7', content: 'content of notes 7', author: 'first_name_6 last_name_7', created_at: '01-01-2020', update_at: '01-02-2020'},
// ];

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  titleComponent: {
    textAlign: 'center'
  }
}));

function Notes() {
  const classes = useStyles();

  const [notes, setNotes] = useState(null);

  useEffect(() => {
    getNotes();
  }, []);

  function getNotes() {
    axios({ method: 'GET', url: '/notes/' })
      .then((response) => {
        const data = response.data;
        setNotes(data);
      })
      .catch((error) => {
        alert(`error ${error.response} with status ${error.status}`)
      });
  }

  return (
    <Paper square className={classes.root}>
      <Container maxWidth={"lg"}>
        <Typography variant="h5" className={classes.titleComponent}>
          Новости&nbsp;и&nbsp;статьи
        </Typography>
        <Carousel show={3} infiniteLoop autoplay>
          {
            notes
              ? notes.map((item) => {
                return <Note {...item} key={item.id}/>
              })
              : ['1', '2', '3'].map((item) => (<NoteMock key={item}/>))
          }
        </Carousel>
      </Container>
    </Paper>
  )
}

export default Notes;