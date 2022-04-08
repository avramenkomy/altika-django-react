import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  centerText: {
    '& > *': {
      textAlign: 'center'
    }
  }
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function ListItemsComponent() {
  const classes = useStyles();
  const widthMore600 = useMediaQuery('(min-width:600px)');

  const rootStyle = clsx({
    [classes.root] : true,
    [classes.centerText] : !widthMore600
  });

  return (
    <List className={rootStyle}>
      <ListItemLink href="#">
        <ListItemText primary="Виды экспертиз" />
      </ListItemLink>
      <ListItemLink href="#">
        <ListItemText primary="Услуги" />
      </ListItemLink>
      <ListItemLink href="#">
        <ListItemText primary="Стоимость" />
      </ListItemLink>
      {/* TODO: Скрытые элементы меню футера в разработке*/}
      {/* <ListItemLink href="#">
        <ListItemText primary="Блог" />
      </ListItemLink>
      <ListItemLink href="#">
        <ListItemText primary="FAQ" />
      </ListItemLink> */}
    </List>
  )
}

export default ListItemsComponent;