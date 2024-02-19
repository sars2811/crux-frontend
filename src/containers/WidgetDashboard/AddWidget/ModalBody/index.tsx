import React from 'react';
import { makeStyles } from 'tss-react/mui';
import WidgetType from '../../../../commons/enums/WidgetType';
import { Button, ButtonGroup, IconButton } from '@mui/material';
import { Restore } from '@mui/icons-material';
import { ReactComponent as BarGraph } from './../../../../assets/images/bar-chart.svg';
import { ReactComponent as LineGraph } from './../../../../assets/images/line-graph.svg';
import { ReactComponent as PieGraph } from './../../../../assets/images/pie-chart.svg';

interface ModalBodyProps {
  onClose: () => void;
  widgetType: WidgetType;
  setWidgetType: (widgetType: WidgetType) => void;
}

const useStyles = makeStyles()((theme) => ({
  root: {
    margin: '30px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'end',
    height: '100%',
    gap: '30px',
  },
  widgetContainer: {
    height: '100%',
    backgroundColor: theme.palette.background.default,
    borderRadius: '10px',
    display: 'flex',
    flexGrow: 12,
  },
  actionContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexGrow: 2,
  },
  actionTitle: {
    fontSize: '14px',
    color: theme.palette.text.primary,
    margin: '5px 0 5px 0',
  },
  customButton: {
    padding: '18px',
    borderRadius: '8px',
    border: '1px solid #CBD5E1',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    p: {
      '&:first-child': {
        fontSize: '20px',
        color: '#585858',
      },
      'margin': '0',
      'fontSize': '14px',
      'color': theme.palette.text.primary,
    },
  },
  customButtonActive: {
    border: '1px solid #5E5ADB',
    boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.25)',
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  actionGroup: {
    display: 'flex',
    flexDirection: 'row',
    gap: '12px',
  },
  actionButton: {
    padding: '15px',
    boxShadow: 'none',
    textDecoration: 'none',
    textTransform: 'none',
    width: 'fill-available',
  },
  actionIconButton: {
    padding: '15px',
    backgroundColor: theme.palette.background.default,
    borderRadius: '8px',
    border: '1px solid #CBD5E1',
  },
  graphButtonGroup: {
    display: 'flex',
    flexDirection: 'row',
    gap: '8px',
    backgroundColor: '#F4F4F5',
    width: 'fit-content',
    padding: '5px',
    borderRadius: '6px',
  },
  graphButton: {
    padding: '6px 12px',
    svg: {
      scale: '1.25',
    },
    borderRadius: '4px',
  },
  graphButtonActive: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: '4px',
  },
}));

const ModalBody: React.FC<ModalBodyProps> = ({
  onClose,
  widgetType,
  setWidgetType,
}) => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.widgetContainer}></div>
      <div className={classes.actionContainer}>
        <div className={classes.buttonGroup}>
          <p className={classes.actionTitle}>COMPONENTS</p>
          <div
            className={[
              classes.customButton,
              widgetType == WidgetType.Data ? classes.customButtonActive : '',
            ].join(' ')}
            onClick={() => setWidgetType(WidgetType.Data)}
          >
            <p>Data</p>
            <p>Random Description</p>
          </div>
          <div
            className={[
              classes.customButton,
              widgetType == WidgetType.BarGraph ||
              widgetType == WidgetType.LineGraph ||
              widgetType == WidgetType.PieGraph
                ? classes.customButtonActive
                : '',
            ].join(' ')}
            onClick={() => {
              if (
                widgetType == WidgetType.BarGraph ||
                widgetType == WidgetType.LineGraph ||
                widgetType == WidgetType.PieGraph
              ) {
                return;
              }
              setWidgetType(WidgetType.BarGraph);
            }}
          >
            <p>Graph</p>
            <p>Random Description</p>
            <ButtonGroup size='small' className={classes.graphButtonGroup}>
              <IconButton
                className={[
                  classes.graphButton,
                  widgetType == WidgetType.BarGraph
                    ? classes.graphButtonActive
                    : '',
                ].join(' ')}
                onClick={(e) => {
                  e.stopPropagation();
                  setWidgetType(WidgetType.BarGraph);
                }}
              >
                <BarGraph />
              </IconButton>
              <IconButton
                className={[
                  classes.graphButton,
                  widgetType == WidgetType.LineGraph
                    ? classes.graphButtonActive
                    : '',
                ].join(' ')}
                onClick={(e) => {
                  e.stopPropagation();
                  setWidgetType(WidgetType.LineGraph);
                }}
              >
                <LineGraph />
              </IconButton>
              <IconButton
                className={[
                  classes.graphButton,
                  widgetType == WidgetType.PieGraph
                    ? classes.graphButtonActive
                    : '',
                ].join(' ')}
                onClick={(e) => {
                  e.stopPropagation();
                  setWidgetType(WidgetType.PieGraph);
                }}
              >
                <PieGraph />
              </IconButton>
            </ButtonGroup>
          </div>
          <div
            className={[
              classes.customButton,
              widgetType == WidgetType.Summary
                ? classes.customButtonActive
                : '',
            ].join(' ')}
            onClick={() => setWidgetType(WidgetType.Summary)}
          >
            <p>Summary</p>
            <p>Random Description</p>
          </div>
        </div>
        <div className={classes.actionGroup}>
          <IconButton className={classes.actionIconButton}>
            <Restore />
          </IconButton>
          <Button
            variant='contained'
            color='primary'
            style={{
              border: '1px solid #E4E4E7',
              color: '#9F9F9F',
            }}
            className={classes.actionButton}
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            variant='contained'
            color='secondary'
            className={classes.actionButton}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalBody;
