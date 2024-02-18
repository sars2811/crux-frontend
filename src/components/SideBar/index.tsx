import React from 'react';
import { makeStyles } from 'tss-react/mui';
import Avatar from '@mui/material/Avatar';
import AvatarPlaceholder from './../../assets/images/AvatarPlaceholder.png';
import { ReactComponent as Logo } from './../../assets/images/logo.svg';
import { ReactComponent as Icon1 } from './../../assets/images/Icon-1.svg';
import { ReactComponent as Icon2 } from './../../assets/images/Icon-2.svg';
import { ReactComponent as Icon3 } from './../../assets/images/Icon-3.svg';

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100vh',
    backgroundColor: theme.palette.background.paper,
    width: '80px',
    borderRight: `1px solid #E4E4E7`,
  },
  navigationContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '30%',
    svg: {
      scale: '1.2',
    },
  },
}));

const SideBar: React.FC = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.navigationContainer}>
        <Logo />
        <Icon1 />
        <Icon2 />
        <Icon3 />
      </div>
      <div>
        <img src={AvatarPlaceholder} />
      </div>
    </div>
  );
};

export default SideBar;
