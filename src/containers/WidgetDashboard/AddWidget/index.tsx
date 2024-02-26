import { Modal } from '@mui/material';
import React from 'react';
import { makeStyles } from 'tss-react/mui';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import WidgetType from '../../../commons/enums/WidgetType';
import { WidgetColor, WidgetTabData } from '../../../components/Widget';

interface AddWidgetProps {
  open: boolean;
  onClose: () => void;
  selectedTab: number;
  tabKey: string;
  data: WidgetTabData[];
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
  open,
  onClose,
  tabKey,
  data,
}) => {
  const { classes } = useStyles();
  const [title, setTitle] = React.useState<string>('Scores');
  const [widgetType, setWidgetType] = React.useState<WidgetType>(
    WidgetType.Data
  );

  const [widgetColor, setWidgetColor] = React.useState<WidgetColor>(
    WidgetColor.White
  );

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
          data={data}
          tabKey={tabKey}
        />
      </div>
    </Modal>
  );
};

export default AddWidget;
