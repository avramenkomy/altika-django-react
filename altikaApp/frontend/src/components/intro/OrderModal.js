import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Button, Dialog, IconButton, Typography, TextField } from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';

import { withStyles, makeStyles, alpha } from '@material-ui/core/styles';

import validation from '../../services/tackles/validation';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    background: 'linear-gradient(0deg, #256EA4 40%, #508BB6 70%);',
    color: theme.palette.secondary.contrastText,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const useStyles = makeStyles((theme) => ({
  items: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  itemsAction: {
    textAlign: 'center',
  },
  textField: {
    border: '1px solid #e2e2e1',
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: '#fcfcfb',
    '&:hover': {
      backgroundColor: '#fff',
    },
    '&$focused': {
      backgroundColor: '#fff',
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h5" color="secondary">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

function OrderModal(props) {
  const classes = useStyles();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [phoneError, setPhoneError] = useState(false);
  const [userNameError, setUserNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleSendOrder = () => {
    userName === '' ? setUserNameError(true) : setUserNameError(false)
    validation('email', email) ? setEmailError(false) : setEmailError(true)
    validation('phone', phone) ? setPhoneError(false) : setPhoneError(true)
    if ( !phoneError && !userNameError && !emailError ) {
      console.log('request for send massege to email');
      props.onClose();
    }
  }

  // useEffect(() => {
  //   getCallUs();
  // }, []);

  // function getCallUs() {
  //   axios.post('/call_us/', { userName, email, phone })
  //     .then((response) => {
  //       console.log(response.data);
  //       setUserName('');
  //       setEmail('');
  //       setPhone('');
  //     })
  //     .catch((e) => { alert(`error ${e.response} with status ${e.status}`) });
  // }

  return (
    <Dialog onClose={props.onClose} open={props.open} maxWidth={'xs'}>
      <DialogTitle onClose={props.onClose}>
        Оставить заявку
      </DialogTitle>
      <DialogContent dividers>
      <Grid container>

        <Grid item xs={12} className={classes.items}>
          <TextField
            label="Введите имя"
            variant="filled"
            size="small"
            className={classes.textField}
            InputProps={{ disableUnderline: true}}
            value={userName}
            onChange={(event) => {
              setUserName(event.target.value)
            }}
            error={userNameError}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} className={classes.items}>
          <TextField
            label="Введите e-mail"
            variant="filled"
            size="small"
            className={classes.textField}
            InputProps={{ disableUnderline: true}}
            value={email}
            onChange={(event) => {
              setEmail(event.target.value)
            }}
            error={emailError}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} className={classes.items}>
          <TextField
            label="Введите телефон"
            variant="filled"
            size="small"
            className={classes.textField}
            InputProps={{ disableUnderline: true}}
            value={phone}
            onChange={(event) => {
              setPhone(event.target.value)
            }}
            error={phoneError}
            fullWidth
          />
        </Grid>
      </Grid>
      </DialogContent>
      <DialogActions>
        <Grid container className={classes.itemsAction}>
          <Grid item xs={12}>
            <Button variant="contained" onClick={handleSendOrder} color="primary" fullWidth>
              Отправить
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="caption" component="p">
              Нажимая кнопку отправить, Вы даете согласие на обработку персональных данных и бла-бла-бла...
            </Typography>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  );
}

export default OrderModal;