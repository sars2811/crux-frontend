import React from 'react';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100vh',
  },
}));

const Root: React.FC = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Root;
