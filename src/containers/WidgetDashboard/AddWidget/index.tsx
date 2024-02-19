import { Modal } from '@mui/material';
import React from 'react';
import { makeStyles } from 'tss-react/mui';
import ModalHeader from './ModalHeader';
import { title } from 'process';

interface AddWidgetProps {
  open: boolean;
  onClose: () => void;
  selectedTab: number;
  tabKeys: string[][];
}

const useStyles = makeStyles()((theme) => ({
  modalContentRoot: {
    height: '80%',
    width: '80%',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '10px',
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const AddWidget: React.FC<AddWidgetProps> = ({
  selectedTab,
  tabKeys,
  open,
  onClose,
}) => {
  const { classes } = useStyles();
  const [navKey, setNavKey] = React.useState(tabKeys[selectedTab]);
  const [title, setTitle] = React.useState<string>('Scores');

  React.useEffect(() => {
    setNavKey(tabKeys[selectedTab]);
  }, [selectedTab, tabKeys]);

  return (
    <Modal open={open} onClose={onClose} className={classes.root}>
      <div className={classes.modalContentRoot}>
        <ModalHeader title={title} setTitle={setTitle} />
      </div>
    </Modal>
  );
};

export default AddWidget;
