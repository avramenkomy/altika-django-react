import React from 'react';
import { makeStyles} from '@material-ui/core/styles';

import './logo.css'
import LogoImage from '../../../resources/img/default_logo.jpeg';

const useStyle = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(1),
  },
  img: {
    objectFit: 'cover',
    maxWidth: '140px',
  }
}));

export default function Logo() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <img src={LogoImage} alt="logo" className={classes.img}/>
    </div>
  )
}