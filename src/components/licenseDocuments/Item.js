import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './item.css'

const useStyles = makeStyles((theme) => ({
  license_card_container: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  card: {
    padding: '8px',
    '& > img': {
      maxHeight: '400px',
      objectFit: 'contain',
    },
  },
}));

function Item (props) {
  const classes = useStyles();

  const {title, url, description} = props;
  return (
    <div className={classes.license_card_container}>
      <div className={classes.card} data-tooltip={description}>
        <img src={url} alt={title} style={{width: '100%'}} />
      </div>
    </div>
  )  
}

export default Item;