import React, { useState } from 'react';
import { Grid, Button, Dialog, IconButton, Typography, TextField } from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';

import { withStyles, makeStyles, alpha } from '@material-ui/core/styles';

import validation from '../../services/tackles/validation';
import { Emails } from '../../services/api';

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

  const checkErrors = () => {
    !validation('string', userName).state ? setUserNameError(true) : setUserNameError(false);
    !validation('email', email).state ? setEmailError(true) : setEmailError(false);
    !validation('phone', phone).state ? setPhoneError(true) : setPhoneError(false);
  }

  const handleSend = async function () { // запрос на отправку сообщения
    let result;
    if (userName !== '' && email !== '' && phone !== '' && !userNameError && !emailError && !phoneError) {  // TODO: поставить корректное условие
      const params = {
        userName,
        email,
        phone
      }
      result = await Emails.sendCallUs(params);
      if (result && result.status === 200) {
        props.onClose();
        // TODO: добавить тост об успешной отправке заявки
      }
    } else {
      checkErrors();
    }
  }

  const handleNameInput = (event) => {
    setUserName(event.target.value);
    if (!validation('string', event.target.value).state) {
      setUserNameError(true);
    } else {
      setUserNameError(false);
    }
  }

  const handleEmailInput = (event) => {
    setEmail(event.target.value);
    if (!validation('email', event.target.value).state) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  }
  
  const handlePhoneInput = (event) => {
    setPhone(event.target.value);
    if (!validation('phone', event.target.value).state) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
  }

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
            onInput={handleNameInput}
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
            onInput={handleEmailInput}
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
            onInput={handlePhoneInput}
            error={phoneError}
            fullWidth
          />
        </Grid>
      </Grid>
      </DialogContent>
      <DialogActions>
        <Grid container className={classes.itemsAction}>
          <Grid item xs={12}>
            <Button variant="contained" onClick={handleSend} disabled={userNameError || emailError || phoneError} color="primary" fullWidth>
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