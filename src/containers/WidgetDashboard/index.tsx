import React from 'react';
import { makeStyles } from 'tss-react/mui';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
  },
}));

const WidgetDashboard: React.FC = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default WidgetDashboard;
