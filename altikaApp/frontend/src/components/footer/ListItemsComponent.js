import React from 'react';
import { List, ListItem, ListItemIcon } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    '& a': {
      textDecoration: 'none',
      color: '#e0e1e2',
    },
  },
  centerText: {
    '& > *': {
      textAlign: 'center'
    }
  }
}));

function ListItemsComponent() {
  const classes = useStyles();
  const widthMore600 = useMediaQuery('(min-width:600px)');

  const rootStyle = clsx({
    [classes.root] : true,
    [classes.centerText] : !widthMore600
  });

  return (
    <List className={rootStyle}>
      <ListItem button>
        <AnchorLink offset='100' href="#expertise_types">Виды экспертиз</AnchorLink>
      </ListItem>
      <ListItem button>
        <AnchorLink offset='100' href="#services">Услуги</AnchorLink>
      </ListItem>
      <ListItem button>
        <AnchorLink offset='100' href="#services">Стоимость</AnchorLink>
      </ListItem>
      <ListItem button>
        <AnchorLink href="#header">
          Наверх
          <ListItemIcon>
            <ArrowUpwardIcon fontSize="small" color="secondary" />
          </ListItemIcon>
        </AnchorLink>
      </ListItem>
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