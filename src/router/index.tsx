import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../containers/Root';
import WidgetDashboard from '../containers/WidgetDashboard';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <div>Home</div> },
      { path: '/about', element: <div>About</div> },
      {
        path: '/widgets',
        element: <WidgetDashboard />,
      },
      { path: '/1', element: <div>1</div> },
      { path: '/2', element: <div>2</div> },
    ],
  },
]);

export default routes;
