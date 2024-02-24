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
        text: 'lorum ipsum',
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
        text: 'lorum ipsum',
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
        widgetType: WidgetType.Data,
        widgetData: widgetTabData,
        widgetColor: WidgetColor.Crux,
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
        widgetType: WidgetType.Data,
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