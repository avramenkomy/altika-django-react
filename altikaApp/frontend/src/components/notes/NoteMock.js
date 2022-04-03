import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 175,
    border: '1px solid #e5e5e5',
    background: '#e5e5e5'
  }
}));

function Note(props) {
  const classes = useStyles();

  return (
    <div className="container">
        <Card className={classes.root} />
    </div>
  )
}

export default Note;
