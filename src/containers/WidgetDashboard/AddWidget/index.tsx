import { Modal } from '@mui/material';
import React from 'react';
import { makeStyles } from 'tss-react/mui';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import WidgetType from '../../../commons/enums/WidgetType';
import { WidgetColor } from '../../../components/Widget';

interface AddWidgetProps {
  open: boolean;
  onClose: () => void;
  selectedTab: number;
  tabKeys: string[][];
}

const useStyles = makeStyles()((theme) => ({
  modalContentRoot: {
    height: '80%',
    width: '70%',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '16px',
    display: 'flex',
    flexDirection: 'column',
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
  const [widgetType, setWidgetType] = React.useState<WidgetType>(
    WidgetType.Data
  );

  const [widgetColor, setWidgetColor] = React.useState<WidgetColor>(
    WidgetColor.White
  );

  React.useEffect(() => {
    setNavKey(tabKeys[selectedTab]);
  }, [selectedTab, tabKeys]);

  return (
    <Modal open={open} onClose={onClose} className={classes.root}>
      <div className={classes.modalContentRoot}>
        <ModalHeader title={title} setTitle={setTitle} onClose={onClose} />
        <ModalBody
          onClose={onClose}
          widgetType={widgetType}
          setWidgetType={setWidgetType}
          widgetColor={widgetColor}
          setWidgetColor={setWidgetColor}
          title={title}
        />
      </div>
    </Modal>
  );
};

export default AddWidget;
