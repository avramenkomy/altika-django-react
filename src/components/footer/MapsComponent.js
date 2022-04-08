import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  }
}));

function MapsComponent({width, height}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <iframe
        title="openstreetmap"
        width={width}
        height={height}
        frameBorder="0"
        scrolling="no"
        src="https://www.openstreetmap.org/export/embed.html?bbox=37.89137845393271%2C55.68090855834622%2C37.90414576884359%2C55.68507000182385&amp;layer=mapnik&amp;marker=55.68298933543484%2C37.89776211138815"
      />
    </div>
  )
}

export default MapsComponent;