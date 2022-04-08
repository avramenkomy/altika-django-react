import React from 'react';
import { Grid, Box, Button, Typography } from '@material-ui/core';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import { makeStyles } from '@material-ui/core/styles';
import './callUs.css';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
  },
  wrapperContacts: {
    verticalAlign: 'middle',
    textAlign: 'left',
  },
  contacts: {
    verticalAlign: 'middle',
    marginRight: theme.spacing(1)
  },
}));

export default function CallUs() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container alignItems="center">
        <Grid item>
          <Button color="inherit" variant="outlined" style={{ marginRight: '5px'}}>Заказать звонок</Button>
        </Grid>
        <Grid item>
          <Box className={classes.wrapperContacts}>
            <CallIcon fontSize="small" className={classes.contacts}/>
            <Typography component="span" variant="body2">+7 (123) 456-78-90</Typography>
          </Box>
          <Box className={classes.wrapperContacts}>
            <EmailIcon fontSize="small" className={classes.contacts}/>
            <Typography component="span" variant="body2">example@domain.com</Typography>
          </Box>
        </Grid>
      </Grid>


        {/*<Button color="inherit" variant="outlined">Перезвоните мне</Button>*/}

        {/*<Box>*/}
        {/*  <Box><CallIcon /></Box>*/}
        {/*  <Box><EmailIcon /></Box>*/}
        {/*</Box>*/}
    </div>
  )
}