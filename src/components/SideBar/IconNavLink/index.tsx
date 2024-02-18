import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';

interface IconNavLinkProps {
  href: string;
  icon: React.ReactNode;
}

const useStyles = makeStyles()((theme) => ({
  active: {
    backgroundColor: '#E9EDF5',
    borderRadius: '10px',
  },
  iconContainer: {
    height: '50px',
    width: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const IconNavLink: React.FC<IconNavLinkProps> = ({ href, icon }) => {
  const { classes } = useStyles();
  return (
    <NavLink
      to={href}
      className={({ isActive, isPending }) => (isActive ? classes.active : '')}
    >
      <div className={classes.iconContainer}>{icon}</div>
    </NavLink>
  );
};

export default IconNavLink;
