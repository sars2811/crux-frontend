import React from 'react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    height: '100%',
    width: '100%',
    backgroundColor: theme.palette.background.default,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  heading: {
    fontSize: '3rem',
    color: '#5E5ADB',
    margin: '0',
  },
}));

const BaseDisplay: React.FC<{ text: string }> = ({ text }) => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <h1 className={classes.heading}>{text}</h1>
    </div>
  );
};

export default BaseDisplay;
