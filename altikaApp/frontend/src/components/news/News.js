import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { MobileStepper, Paper, Typography, Button, Container } from '@material-ui/core';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import decoration0 from '../../resources/img/news_image/1.jpeg';
import decoration1 from '../../resources/img/news_image/2.jpeg';
import decoration2 from '../../resources/img/news_image/3.jpg';
import decoration3 from '../../resources/img/news_image/4.jpeg';
import decoration4 from '../../resources/img/news_image/5.jpeg';
import decoration5 from '../../resources/img/news_image/6.jpeg';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  { label: 'News title 1', imgPath: decoration0, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac euismod justo. Duis consequat nibhvel est dignissim consequat. Mauris lobortis lobortis convallis. Pellentesque hendrerit iaculis justo, nec rhoncus eros. Nam id leo nec eros dignissim posuere.' },
  { label: 'News title 2', imgPath: decoration1, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac euismod justo. Duis consequat nibhvel est dignissim consequat. Mauris lobortis lobortis convallis. Pellentesque hendrerit iaculis justo, nec rhoncus eros. Nam id leo nec eros dignissim posuere.' },
  { label: 'News title 3', imgPath: decoration2, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac euismod justo. Duis consequat nibhvel est dignissim consequat. Mauris lobortis lobortis convallis. Pellentesque hendrerit iaculis justo, nec rhoncus eros. Nam id leo nec eros dignissim posuere.' },
  { label: 'News title 4', imgPath: decoration3, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac euismod justo. Duis consequat nibhvel est dignissim consequat. Mauris lobortis lobortis convallis. Pellentesque hendrerit iaculis justo, nec rhoncus eros. Nam id leo nec eros dignissim posuere.' },
  { label: 'News title 5', imgPath: decoration4, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac euismod justo. Duis consequat nibhvel est dignissim consequat. Mauris lobortis lobortis convallis. Pellentesque hendrerit iaculis justo, nec rhoncus eros. Nam id leo nec eros dignissim posuere.' },
  { label: 'News title 6', imgPath: decoration5, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac euismod justo. Duis consequat nibhvel est dignissim consequat. Mauris lobortis lobortis convallis. Pellentesque hendrerit iaculis justo, nec rhoncus eros. Nam id leo nec eros dignissim posuere.' },
];

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  stepper: {
    maxWidth: 1000,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img_container:{
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
  },
  dark_shadow: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0,0,0,.58)',
  },
  text_container: {
    position: 'absolute',
    color: '#FFFFFF',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    textAlign: 'center',
    lineHeight: '2em'
  },
  img: {
    // maxHeight: 500,
    height: '70vh',
    objectFit: 'cover',
    objectPosition: 'center',
    repeat: 'no-repeat',
    display: 'block',
    overflow: 'hidden',
    width: '100%',
  },
}));

function News() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <Paper className={classes.root}>
      <Container className={classes.stepper}>
        <Paper square elevation={0} className={classes.header}>
          <Typography>{tutorialSteps[activeStep].label}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          interval={3000}          
        >
          {tutorialSteps.map((step, index) => (
            <div key={step.label} className={classes.img_container}>
              {Math.abs(activeStep - index) <= 2 ? (
                <React.Fragment>
                  <div className={classes.dark_shadow} />
                  <img className={classes.img} src={step.imgPath} alt={step.label} />
                  <Typography className={classes.text_container} component="p" variant="body1">{step.content}</Typography>
                </React.Fragment>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
              Вперед
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Назад
            </Button>
          }
        />
      </Container>
    </Paper>
  )
}

export default News;
