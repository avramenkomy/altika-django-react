import React from 'react';
import { Paper, Typography, Grid, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { green } from '@material-ui/core/colors';

import clsx from 'clsx';

import decoration from '../../resources/img/background_image/fucking_with_laptop.jpeg'; // TODO: Тут стоит приложить картинку с более политкорректным названием

const reasonsArr = [
  'установление истины в судопроизводстве;',
  'доказательство врачебной ошибки;',
  'обоснование претензий по строительству, ремонтным и отделочным работам;',
  'определение объема страховых выплат и ремонтных работ в случае пожара, затопления, ДТП, аварии;',
  'защита интересов при совершении купли-продажи объектов недвижимости;',
  'разрешение различных имущественных споров.'
];

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${decoration})`,
    position: 'relative',
    paddingTop: '80px',
    paddingBottom: '80px',
    backgroundColor: '#fff',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPositionX: '50%',
    backgroundPositionY: 'center',
    backgroundAttachment: 'fixed',
  },
  root_mobile: {
    width: '100%',
  },
  content: {
    width: '60vw',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    paddingBottom: theme.spacing(3),
  },
  content__mobile: {
    width: '100%',
    textAlign: 'center',
    paddingBottom: theme.spacing(1),

  },
  title: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  reasons: {
  },
  reasonItem: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  reasonItemText: {
    textAlign: 'left',
    paddingLeft: theme.spacing(1),
  },
  warning_block: {
    backgroundColor: theme.palette.primary.main,
    color: '#FFF',
    width: '80%',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: theme.spacing(2),
  },
}));


function ReasonsForExpertise() {
  
  const matches800 = useMediaQuery('(min-width:800px)');
  const classes = useStyles();

  const rootStyle = clsx({
    [classes.root] : matches800,
    [classes.root_mobile] : !matches800
  });

  const contentStyle = clsx({
    [classes.content] : matches800,
    [classes.content__mobile] : !matches800
  });

  return(
    <Paper className={rootStyle} square>
      <Paper className={contentStyle} square>
        <Typography variant="h4" component="h4" className={classes.title} >
          Независимая экспертиза и оценка необходима в следующих ситуациях:
        </Typography>
        <Paper square className={classes.reasons}>
          {reasonsArr.map((item, index) => {
            return (
              <Grid container key={index} className={classes.reasonItem}>
                <Grid item xs={1}>
                  <CheckCircleIcon style={{ color: green[500] }} />
                </Grid>
                <Grid item xs={11}>
                  <Typography className={classes.reasonItemText}>{item}</Typography>
                </Grid>
              </Grid>
            )
          })}
        </Paper>
        <Paper className={classes.warning_block}>
          <Typography variant="h6" component="p">ВАЖНО!</Typography>
          <Typography variant="subtitle1" component="p">
            Заключения независимой экспертизы обладают юридической силой. 
            За ошибки и подделку результатов экспертизы Вы несете уголовную ответственность. 
            Поэтому следует доверять проведение экспертиз только компаниям, обладающим лицензией
            на право заниматься экспертной и оценочной деятельностью.
          </Typography>
        </Paper>
      </Paper>      
    </Paper>
  )
}

export default ReasonsForExpertise;