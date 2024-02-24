import React from 'react';
import { makeStyles } from 'tss-react/mui';
import WidgetType from '../../commons/enums/WidgetType';
import {
  IconButton,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  Tabs,
  Theme,
} from '@mui/material';
import { MoreHoriz } from '@mui/icons-material';
import {
  BarChart,
  YAxis,
  Tooltip,
  Bar,
  CartesianGrid,
  XAxis,
  LineChart,
  Rectangle,
  Line,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

interface BlockData {
  name: string;
  value: number;
}

interface ColumnData {
  name: string;
  data: BlockData[];
}

interface SummaryData {
  name: string;
  data: BlockData[];
  text: string;
}

export interface WidgetTabData {
  data: ColumnData[];
  name: string; // Name of the Tab
  summary: SummaryData;
}

export enum WidgetColor {
  White = '#FFFFFF',
  Black = 'rgba(40, 40, 40, 1)',
  Crux = '#5E5ADB',
}

export interface WidgetData {
  widgetTitle?: string;
  widgetCategory: string;
  widgetType: WidgetType;
  widgetData: WidgetTabData[];
  moreButtonDisbale?: boolean;
  widgetColor: WidgetColor;
}

const colors = [
  '#F1E254',
  '#FF8E8E',
  '#96D3FF',
  '#5FDC8F',
  '#F182F3',
  '#5E5ADB',
];

interface WidgetTextThemeColor {
  primary: string;
  secondary: string;
  information: string;
  tableHeader: string;
}

const widgetTextTheme: { [key in WidgetColor]: WidgetTextThemeColor } = {
  [WidgetColor.White]: {
    primary: '#8d8d8d',
    secondary: '#5e5adb',
    information: 'rgba(57, 57, 57, 0.9)',
    tableHeader: '#ABA8FF',
  },
  [WidgetColor.Black]: {
    primary: 'rgba(241, 241, 242, 0.6)',
    secondary: '#ffffff',
    information: '#ffffff',
    tableHeader: 'rgba(241, 241, 242, 0.6)',
  },
  [WidgetColor.Crux]: {
    secondary: '#ffffff',
    primary: 'rgba(255, 255, 255, 0.65)',
    information: '#ffffff',
    tableHeader: 'rgba(241, 241, 242, 0.6)',
  },
};

const useStyles = makeStyles<{ widgetColor: WidgetColor }>()(
  (theme, { widgetColor }) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      height: '300px',
      aspectRatio: '1/1',
      margin: 0,
      borderRadius: '20px',
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      alignContent: 'center',
      width: '100%',
      borderBottom: '3px solid rgba(225, 225, 225, 0.4)',
      height: 'fit-content',
      justifyContent: 'space-between',
      paddingTop: '10px',
    },
    tab: {
      color: widgetTextTheme[widgetColor].primary,
    },
    summaryText: {
      margin: '15px',
      color: widgetTextTheme[widgetColor].primary,
      height: '210px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    chartRoot: {
      margin: '10px',
    },
    tableContainer: {
      'width': 'auto',
      'margin': '10px',
      'height': '100%',
      ' td': {
        borderBottom: 'none !important',
      },
      ' th': {
        borderBottom: 'none !important',
      },
    },
    widgetCategoryCell: {
      color: widgetTextTheme[widgetColor].secondary,
    },
    tableHeaderCell: {
      color: widgetTextTheme[widgetColor].tableHeader,
    },
    tableRoot: {
      'borderCollapse': 'collapse',
      ' td': {
        'borderRight': '3px solid #F6F6F6',
        'textAlign': 'center',
        ':last-child': {
          borderRight: 'none',
        },
      },
      ' th': {
        'borderRight': '3px solid #F6F6F6',
        'textAlign': 'center',
        ':last-child': {
          borderRight: 'none',
        },
      },
      'tableLayout': 'auto',
      'width': '100%',
      'height': '100%',
    },
    tableFooterCell: {
      color: widgetTextTheme[widgetColor].information,
      fontWeight: 'bold',
    },
    tabsContainer: {
      ' .Mui-selected': {
        color: `${widgetTextTheme[widgetColor].secondary} !important`,
      },
      ' .MuiTabs-indicator': {
        backgroundColor: widgetTextTheme[widgetColor].secondary,
      },
    },
    moreButton: {
      color: widgetTextTheme[widgetColor].primary,
    },
    tableCell: {
      color: widgetTextTheme[widgetColor].primary,
    },
  })
);

const Widget: React.FC<WidgetData> = ({
  widgetData,
  widgetType,
  moreButtonDisbale,
  widgetTitle,
  widgetCategory,
  widgetColor,
}) => {
  const { classes } = useStyles({ widgetColor: widgetColor });
  const tabs = widgetData.map((tabData, index) => {
    return [tabData.name, index];
  });
  const labels = widgetData[0].data.map((block) => block.name);
  const dataCategories = widgetData[0].data[0].data.map((block) => block.name);

  const [tabIndex, setTabIndex] = React.useState(0);
  const handleTabChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: number
  ) => {
    setTabIndex(newValue);
  };

  const structuredData = widgetData[tabIndex].data.map((column) => {
    const data: { [key: string]: any } = {}; // Add index signature to allow indexing with a string
    column.data.forEach((block) => {
      data[block.name] = block.value;
    });
    data['name'] = column.name;
    return data;
  });

  return (
    <div
      className={classes.root}
      style={{
        backgroundColor: widgetColor,
      }}
    >
      <div className={classes.header}>
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          textColor='secondary'
          indicatorColor='secondary'
          className={classes.tabsContainer}
        >
          {tabs.map((tab) => {
            return <Tab label={tab[0]} key={tab[1]} className={classes.tab} />;
          })}
        </Tabs>
        <IconButton disabled={moreButtonDisbale} className={classes.moreButton}>
          <MoreHoriz />
        </IconButton>
      </div>
      <div>
        {widgetType === WidgetType.Summary && (
          <p className={classes.summaryText}>
            {widgetData[tabIndex].summary.text}
          </p>
        )}
        {widgetType === WidgetType.BarGraph && (
          <BarChart
            data={structuredData}
            height={220}
            width={260}
            barSize={10}
            barGap={2}
            className={classes.chartRoot}
          >
            <XAxis dataKey='name' hide padding={{}} />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: widgetTextTheme[widgetColor].primary }}
            />
            <Tooltip />
            <CartesianGrid strokeDasharray='3 3' vertical={false} />
            {dataCategories.map((label, index) => {
              return (
                <Bar
                  dataKey={label}
                  fill={colors[index]}
                  key={index}
                  name={label}
                  shape={<Rectangle radius={20} />}
                />
              );
            })}
          </BarChart>
        )}
        {widgetType === WidgetType.LineGraph && (
          <LineChart
            data={structuredData}
            height={220}
            width={260}
            className={classes.chartRoot}
          >
            <XAxis dataKey='name' hide type={'category'} />
            <YAxis tick={{ fill: widgetTextTheme[widgetColor].primary }} />
            <Tooltip />
            <CartesianGrid
              horizontal={false}
              stroke={widgetTextTheme[widgetColor].primary}
            />
            {dataCategories.map((label, index) => {
              return (
                <Line
                  type='linear'
                  dataKey={label}
                  fill={colors[index]}
                  stroke={colors[index]}
                  key={index}
                  strokeWidth={6}
                  dot={false}
                />
              );
            })}
          </LineChart>
        )}
        {widgetType === WidgetType.PieGraph && (
          <PieChart height={220} width={260} className={classes.chartRoot}>
            <Tooltip />
            <Pie
              data={structuredData}
              key={0}
              dataKey={dataCategories[0]}
              nameKey={'name'}
              innerRadius={60}
              outerRadius={90}
              paddingAngle={5}
              cornerRadius={6}
            >
              {structuredData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>
            <text
              x={130}
              y={100}
              textAnchor='middle'
              dominantBaseline='middle'
              style={{
                fill: widgetTextTheme[widgetColor].secondary,
              }}
            >
              {widgetData[tabIndex].summary.data[0].value}
            </text>
            <text
              x={130}
              y={120}
              textAnchor='middle'
              dominantBaseline='middle'
              style={{
                fill: widgetTextTheme[widgetColor].primary,
                fontSize: '18px',
              }}
            >
              {widgetData[tabIndex].summary.name}
            </text>
          </PieChart>
        )}
        {widgetType === WidgetType.Data && (
          <TableContainer className={classes.tableContainer}>
            <Table size='small' padding='none' className={classes.tableRoot}>
              <TableHead>
                <TableRow>
                  <TableCell className={classes.widgetCategoryCell}>
                    {widgetCategory}
                  </TableCell>
                  {dataCategories.map((label, index) => {
                    return (
                      <TableCell
                        key={index}
                        className={classes.tableHeaderCell}
                      >
                        {label}
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {widgetData[tabIndex].data.map((column, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell className={classes.tableCell}>
                        {column.name}
                      </TableCell>
                      {column.data.map((block, index) => {
                        return (
                          <TableCell key={index} className={classes.tableCell}>
                            {block.value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell className={classes.tableFooterCell}>
                    {widgetData[tabIndex].summary.name}
                  </TableCell>
                  {widgetData[tabIndex].summary.data.map((block, index) => {
                    return (
                      <TableCell
                        key={index}
                        className={classes.tableFooterCell}
                      >
                        {block.value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        )}
      </div>
    </div>
  );
};

export default Widget;
