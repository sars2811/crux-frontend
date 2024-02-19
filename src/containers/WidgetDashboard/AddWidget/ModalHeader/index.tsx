import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { ReactComponent as ModalIcon } from './../../../../assets/images/layout-dashboard.svg';
import { IconButton, Input } from '@mui/material';
import { Close } from '@mui/icons-material';

interface ModalHeaderProps {
  title: string;
  setTitle: (title: string) => void;
  onClose: () => void;
}

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottom: '1px solid #E4E4E7',
    alignContent: 'baseline',
    flexWrap: 'wrap',
  },
  title: {
    'display': 'flex',
    'flexDirection': 'column',
    'gap': '5px',
    'padding': '20px',
    'p': {
      margin: '0',
      color: theme.palette.text.primary,
      fontSize: '18px',
    },
    'p:first-child': {
      fontSize: '20px',
      fontWeight: 'bold',
      color: theme.palette.text.secondary,
    },
  },
  titleRoot: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'end',
    marginLeft: '20px',
  },
  actionRoot: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end',
    margin: '20px 20px 15px 0',
  },
  textField: {
    border: '1px solid #CBD5E1',
    padding: '6px 12px',
    borderRadius: '8px',
    svg: {
      scale: '0.9',
    },
  },
}));

const ModalHeader: React.FC<ModalHeaderProps> = ({
  title,
  setTitle,
  onClose,
}) => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.titleRoot}>
        <ModalIcon
          style={{
            border: '1px solid #E0DFF8',
            padding: '10px',
            borderRadius: '10px',
            marginBottom: '20px',
          }}
        />
        <div className={classes.title}>
          <p>Create Widget</p>
          <p>Manage the glossary of terms of your Database.</p>
        </div>
      </div>
      <div className={classes.actionRoot}>
        <IconButton onClick={onClose}>
          <Close />
        </IconButton>
        <Input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className={classes.textField}
          placeholder='Widget Title'
          endAdornment={<Close />}
        />
      </div>
    </div>
  );
};

export default ModalHeader;
