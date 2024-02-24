import React from 'react';
import { makeStyles } from 'tss-react/mui';
import Widget, { WidgetData } from '../../../components/Widget';

interface WidgetDisplayProps {
  data: WidgetData[];
}

const useStyles = makeStyles()((theme) => ({
  root: {
    height: '100%',
    width: 'auto',
    backgroundColor: theme.palette.background.default,
    padding: '40px',
  },
  widgetContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '30px',
    justifyContent: 'top',
    alignItems: 'start',
  },
}));

const WidgetDisplay: React.FC<WidgetDisplayProps> = ({ data }) => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.widgetContainer}>
        {data.map((widgetData, index) => {
          return <Widget {...widgetData} key={index} />;
        })}
      </div>
    </div>
  );
};

export default WidgetDisplay;
