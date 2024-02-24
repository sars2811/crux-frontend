import React from 'react';
import { makeStyles } from 'tss-react/mui';
import NavBar from './NavBar';
import { AddOutlined, Close } from '@mui/icons-material';
import { CustomNavButtonProps } from './NavBar/CustomNavButton';
import AddWidget from './AddWidget';

const tabKeys = [['customers', 'products'], ['customers'], ['products']];

const useStyles = makeStyles()(() => ({
  root: {
    display: 'flex',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
  },
}));

const WidgetDashboard: React.FC = () => {
  const { classes } = useStyles();
  const [selectedTab, setSelectedTab] = React.useState(0);
  const [modalOpen, setModalOpen] = React.useState(false);

  const NavBarTabs: CustomNavButtonProps[] = [
    {
      text: 'Overview',
      icon: <Close />,
      selectedTab: selectedTab,
      setSelectedTab: setSelectedTab,
      tabId: 0,
    },
    {
      text: 'Customers',
      icon: <Close />,
      selectedTab: selectedTab,
      setSelectedTab: setSelectedTab,
      tabId: 1,
    },
    {
      text: 'Products',
      icon: <Close />,
      selectedTab: selectedTab,
      setSelectedTab: setSelectedTab,
      tabId: 2,
    },
    {
      text: 'Add',
      icon: <AddOutlined />,
      selectedTab: selectedTab,
      setSelectedTab: setSelectedTab,
      tabId: 3,
      iconActive: true,
    },
  ];

  return (
    <div className={classes.root}>
      <NavBar
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        tabs={NavBarTabs}
        setModalOpen={setModalOpen}
      />
      <AddWidget
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedTab={selectedTab}
        tabKeys={tabKeys}
      />
    </div>
  );
};

export default WidgetDashboard;
