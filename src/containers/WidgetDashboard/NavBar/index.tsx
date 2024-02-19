import {
  AddOutlined,
  Close,
  HomeOutlined,
  SettingsOutlined,
} from '@mui/icons-material';
import { AppBar, Button, IconButton } from '@mui/material';
import React from 'react';
import { makeStyles } from 'tss-react/mui';
import CustomNavButton from './CustomNavButton';

const useStyles = makeStyles()((theme) => ({
  root: {
    border: '1px solid #E4E4E7',
    boxShadow: 'none !important',
    height: '80px',
    padding: '0 20px',
    margin: '0',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    svg: {
      scale: '1.2',
    },
  },
  tabContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '10px',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '10px',
  },
  customButton: {
    boxShadow: 'none',
    backgroundColor: theme.palette.background.default,
    border: '1px solid #E0DFF8',
    padding: '8px 12px',
    color: theme.palette.text.secondary,
    svg: {
      scale: '0.9',
    },
    gap: '5px',
    borderRadius: '10px',
  },
}));

const NavBar: React.FC = () => {
  const { classes } = useStyles();
  //   return <h1>Yo</h1>;
  return (
    <AppBar position='sticky' className={classes.root}>
      <div className={classes.container}>
        <div className={classes.tabContainer}>
          <IconButton>
            <HomeOutlined />
          </IconButton>
          <CustomNavButton href='/widgets' text='Overview' icon={<Close />} />
          <CustomNavButton
            href='/widgets/customers'
            text='Customers'
            icon={<Close />}
          />
          <CustomNavButton
            href='/widgets/products'
            text='Products'
            icon={<Close />}
          />
          <CustomNavButton
            href='/widgets/add'
            icon={<AddOutlined />}
            iconActive
          />
        </div>
        <div className={classes.buttonContainer}>
          <Button variant='contained' className={classes.customButton}>
            <AddOutlined />
            Add Widget
          </Button>
          <IconButton>
            <SettingsOutlined />
          </IconButton>
        </div>
      </div>
    </AppBar>
  );
};

export default NavBar;
