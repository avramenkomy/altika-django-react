import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import MuiTypography from '@material-ui/core/Typography';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

const useStyles = makeStyles(theme => ({
  dark_shadow: {
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: 'rgba(0,0,0,.58)',
  }
}));

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    background: 'linear-gradient(0deg, #256EA4 50%, #508BB6 50%)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    position: 'relative',
  },
}))(MuiAccordionDetails);

const Typography = withStyles(theme => ({
  root: {
    color: '#FFF',
    zIndex: '1',
  }
}))(MuiTypography);

function ServicesAccordion({serviceTypes}) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <React.Fragment>
    {
      serviceTypes.map(service => {
        return (
          <Accordion square expanded={expanded === `panel${service.id}`} onChange={handleChange(`panel${service.id}`)} key={service.id}>
            <AccordionSummary aria-controls={`panel${service.id}-content`} id={`panel${service.id}-header`} expandIcon={expanded ? <RemoveCircleOutlineIcon color="secondary"/> : <AddCircleOutlineIcon color="secondary"/>}>
              <Typography>{service.title}</Typography>
            </AccordionSummary>            
            <AccordionDetails style={{
              backgroundImage: `url(${service.url})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}>
              <div className={classes.dark_shadow} />
              <Typography>
                {service.description}
              </Typography>
            </AccordionDetails>
          </Accordion>
        )
      })
    }      
    </React.Fragment>
  );
}

export default ServicesAccordion;