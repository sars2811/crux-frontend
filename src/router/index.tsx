import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../containers/Root';
import WidgetDashboard from '../containers/WidgetDashboard';
import BaseDisplay from '../containers/LetUsCook';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <BaseDisplay text='Home' /> },
      {
        path: '/widgets',
        element: <WidgetDashboard />,
      },
      {
        path: '/1',
        element: <BaseDisplay text='1st Tab' />,
      },
      { path: '/2', element: <BaseDisplay text='Let Us Cook' /> },
    ],
  },
]);

export default routes;
