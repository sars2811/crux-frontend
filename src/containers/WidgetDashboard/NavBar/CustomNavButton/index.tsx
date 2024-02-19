import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Button } from '@mui/material';

export interface CustomNavButtonProps {
  text?: string;
  icon?: React.ReactNode;
  iconActive?: boolean;
  selectedTab: number;
  setSelectedTab: (tabIndex: number) => void;
  tabId: number;
}

const useStyles = makeStyles()((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100% !important',
    color: theme.palette.text.primary,
    svg: {
      visibility: 'hidden',
    },
    border: '1px solid #E0DFF8',
    padding: '8px 12px',
    borderRadius: '10px',
    textDecoration: 'none',
  },
  containerActive: {
    background: theme.palette.background.default,
    color: theme.palette.text.secondary,
    svg: {
      visibility: 'visible',
      scale: '0.9',
    },
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100px',
  },
  iconActive: {
    background: theme.palette.background.default,
    color: theme.palette.text.secondary,
    svg: {
      visibility: 'visible',
      scale: '0.9',
    },
  },
}));

const CustomNavButton: React.FC<CustomNavButtonProps> = ({
  text,
  icon,
  iconActive,
  selectedTab,
  setSelectedTab,
  tabId,
}) => {
  const { classes } = useStyles();
  return (
    <Button
      className={[
        classes.container,
        selectedTab === tabId ? classes.containerActive : '',
        iconActive ? classes.iconActive : '',
      ].join(' ')}
      onClick={() => setSelectedTab(tabId)}
    >
      <div
        className={classes.textContainer}
        style={{ display: iconActive ? 'none' : 'initial' }}
      >
        {text}
      </div>
      {icon}
    </Button>
  );
};

export default CustomNavButton;
