import WidgetType from "../../commons/enums/WidgetType";
import { WidgetColor, WidgetData, WidgetTabData } from "../../components/Widget";

const widgetTabData: WidgetTabData[] = [
    {
      name: '7d',
      data: [
        {
          name: 'Reusable',
          data: [
            { name: 'Q1-2023', value: 10 },
            { name: 'Q2-2023', value: 4 },
          ],
        },
        {
          name: 'Natural',
          data: [
            { name: 'Q1-2023', value: 2 },
            { name: 'Q2-2023', value: 11 },
          ],
        },
        {
          name: 'Compost',
          data: [
            { name: 'Q1-2023', value: 7 },
            { name: 'Q2-2023', value: 5 },
          ],
        },
        {
          name: 'Reusable..',
          data: [
            { name: 'Q1-2023', value: 3 },
            { name: 'Q2-2023', value: 4 },
          ],
        },
      ],
      summary: {
        name: 'Totals',
        data: [
          { name: 'Q1-2023', value: 22 },
          { name: 'Q2-2023', value: 24 },
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Enim ut tellus elementum sagittis vitae et leo duis. Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Dictumst quisque sagittis purus sit amet volutpat. Cursus sit amet dictum sit amet. Elit ut aliquam purus sit amet luctus venenatis lectus.',
      },
    },
    {
      name: '14d',
      data: [
        {
          name: 'Reusable',
          data: [
            { name: 'Q1-2023', value: 10 },
            { name: 'Q2-2023', value: 4 },
          ],
        },
        {
          name: 'Natural',
          data: [
            { name: 'Q1-2023', value: 2 },
            { name: 'Q2-2023', value: 11 },
          ],
        },
        {
          name: 'Compost',
          data: [
            { name: 'Q1-2023', value: 7 },
            { name: 'Q2-2023', value: 5 },
          ],
        },
        {
          name: 'Reusable..',
          data: [
            { name: 'Q1-2023', value: 3 },
            { name: 'Q2-2023', value: 4 },
          ],
        },
      ],
      summary: {
        name: 'Totals',
        data: [
          { name: 'Q1-2023', value: 22 },
          { name: 'Q2-2023', value: 24 },
        ],
        text: 'Euismod lacinia at quis risus sed vulputate. Nunc non blandit massa enim nec. Fringilla phasellus faucibus scelerisque eleifend donec. Vel pharetra vel turpis nunc eget lorem dolor sed viverra. Consequat mauris nunc congue nisi vitae. Sapien et ligula ullamcorper malesuada.',
      },
    },
  ];
  
const widgetCustomerData: WidgetData[] = [
    {
      widgetTitle: 'Some Score',
      widgetCategory: 'Customers',
      widgetType: WidgetType.LineGraph,
      widgetData: widgetTabData,
      widgetColor: WidgetColor.White,
    },
    {
      widgetTitle: 'Some Other Score',
      widgetCategory: 'Customers',
      widgetType: WidgetType.Data,
      widgetData: widgetTabData,
      widgetColor: WidgetColor.Crux,
    },
      {
        widgetTitle: 'Some Other Score',
        widgetCategory: 'Customers',
        widgetType: WidgetType.PieGraph,
        widgetData: widgetTabData,
        widgetColor: WidgetColor.White,
      },
      {
        widgetTitle: 'Some Other Score',
        widgetCategory: 'Customers',
        widgetType: WidgetType.LineGraph,
        widgetData: widgetTabData,
        widgetColor: WidgetColor.Black,
      },
      {
        widgetTitle: 'Some Other Score',
        widgetCategory: 'Customers',
        widgetType: WidgetType.Summary,
        widgetData: widgetTabData,
        widgetColor: WidgetColor.Crux,
      },
  ];

const widgetProductData: WidgetData[] = [
    {
        widgetTitle: 'Some Score',
        widgetCategory: 'Customers',
        widgetType: WidgetType.BarGraph,
        widgetData: widgetTabData,
        widgetColor: WidgetColor.Black,
      },
];

const data: { [key: string]: WidgetData[] } = {
    "customers": widgetCustomerData,
    "products": widgetProductData,
};

export const getWidgetData = (tabs: string[]) => {
    const tempData: WidgetData[] = [];
    tabs.forEach((tab) => {
      tempData.push(...data[tab]);
    });
    return tempData;
}; 

export const getWidgetTabData = (tab: string) => {
    return widgetTabData;
};