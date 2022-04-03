import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 300,
    // height: 175,
    maxHeight: 175,
    border: '1px solid #e5e5e5'
  },
  container: {
    padding: theme.spacing(1),
  },
  title: {
    fontSize: 14,
  },
  cardFooter: {
    diesplay: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  author: {
    color: '#86909c'
  },
  date: {
    color: '#86909c'
  },
}));

function Note(props) {
  const classes = useStyles();
  const {title, content, author, created_at} = props;

  return (
    <div className="container">
    <Card className={classes.root}>
      <CardHeader title={title} />
      <Divider />
      <CardContent>
        <Typography variant="body2" component="p">
          {content}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions className={classes.cardFooter}>
      <Typography variant="body2" component="p" className={classes.author}>
        {author}
      </Typography>
      <Typography variant="body2" component="p" className={classes.date}>
        {created_at}
      </Typography>
      </CardActions>
    </Card>
    </div>
  )
}

export default Note;
