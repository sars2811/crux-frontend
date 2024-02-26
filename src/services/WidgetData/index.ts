import WidgetType from "../../commons/enums/WidgetType";
import { WidgetColor, WidgetData, WidgetTabData } from "../../components/Widget";

const widgetTabProductData: WidgetTabData[] = [
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
      unit: '%',
    },
    {
      name: '14d',
      data: [
        {
          name: 'Reusable',
          data: [
            { name: 'Q1-2023', value: 8 },
            { name: 'Q2-2023', value: 5 },
          ],
        },
        {
          name: 'Natural',
          data: [
            { name: 'Q1-2023', value: 4 },
            { name: 'Q2-2023', value: 11 },
          ],
        },
        {
          name: 'Compost',
          data: [
            { name: 'Q1-2023', value: 6 },
            { name: 'Q2-2023', value: 8 },
          ],
        },
        {
          name: 'Reusable..',
          data: [
            { name: 'Q1-2023', value: 6 },
            { name: 'Q2-2023', value: 2 },
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
      unit: '%',
    },
  ];
  
const widgetTabCustomerData: WidgetTabData[] = [
  {
    name: 'today',
    data: [
      {
        name: 'Christmas25',
        data: [
          { name: 'Google' , value: 12 },
          { name: 'Instagram' , value: 5 },
          { name: 'Facebook' , value: 10 },
          { name: 'TikTok' , value: 7 },
        ],
      },
      {
        name: 'BirthdaySpecial25',
        data: [
          { name: 'Google' , value: 21 },
          { name: 'Instagram' , value: 27 },
          { name: 'Facebook' , value: 4 },
          { name: 'TikTok' , value: 2 },
        ],
      },
      {
        name: 'NewUser25',
        data: [
          { name: 'Google' , value: 27 },
          { name: 'Instagram' , value: 12 },
          { name: 'Facebook' , value: 13 },
          { name: 'TikTok' , value: 25 },
        ],
      }
    ],
    summary: {
      text: "Based on the provided data, the most effective hour of the day to send an email across all stores for all time, with the highest engagement after opening, is at 15:00(3 PM), with a total of 5041 emails opened. The next best hours are 16:00 (4 PM) and 17:00 (5 PM) with 5007 and 4785 emails opened respectively. There is a noticeable drop in ",
      name: "Totals",
      data: [
        { name: 'Google' , value: 50 },
        { name: 'Instagram' , value: 50 },
        { name: 'Facebook' , value: 50 },
        { name: 'TikTok' , value: 50 },
      ],
    },
    unit: 'k',
  }
]; 

const newData: { [key: string]: WidgetTabData[] } = {
  "customers": widgetTabCustomerData,
  "products": widgetTabProductData,
};

export const getWidgetData = (tabs: string[]) => {
    const tempData: WidgetData[] = [];
    tabs.forEach((tab) => {
      const item = localStorage.getItem(tab);
      if (item) {
        tempData.push(...JSON.parse(atob(item)));
      }
    });
    return tempData;
}; 

export const getWidgetTabData = (tab: string) => {
    return newData[tab];
};

export const setWidgetData = (tab: string, data: WidgetData) => {
  const allData = getWidgetData([tab]).concat(data);
  localStorage.setItem(tab, btoa(JSON.stringify(allData)));
};