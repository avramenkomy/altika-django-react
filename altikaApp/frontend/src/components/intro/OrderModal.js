import React from 'react';
import { Grid, Button, Dialog, IconButton, Typography, TextField } from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';

import { withStyles, makeStyles, alpha } from '@material-ui/core/styles';

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

  const handleSendOrder = () => {
    console.log('Send order to API');
    props.onClose();
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