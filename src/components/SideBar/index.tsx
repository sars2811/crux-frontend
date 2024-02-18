import React from 'react';
import { makeStyles } from 'tss-react/mui';
import AvatarPlaceholder from './../../assets/images/AvatarPlaceholder.png';
import { ReactComponent as Logo } from './../../assets/images/logo.svg';
import { ReactComponent as Icon1 } from './../../assets/images/Icon-1.svg';
import { ReactComponent as Icon2 } from './../../assets/images/Icon-2.svg';
import { ReactComponent as Icon3 } from './../../assets/images/Icon-3.svg';
import IconNavLink from './IconNavLink';
import { Link } from 'react-router-dom';

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
      scale: '1.25',
    },
  },
  avatar: {
    marginBottom: '20px',
  },
}));

const SideBar: React.FC = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.navigationContainer}>
        <Link to='/'>
          <Logo />
        </Link>
        <IconNavLink href='/1' icon={<Icon1 />} />
        <IconNavLink href='/2' icon={<Icon2 />} />
        <IconNavLink href='/widgets' icon={<Icon3 />} />
      </div>
      <div className={classes.avatar}>
        <img src={AvatarPlaceholder} />
      </div>
    </div>
  );
};

export default SideBar;
