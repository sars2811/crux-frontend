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
        children: [
          {
            path: '/widgets',
            element: (
              <div style={{ width: '100%', height: '100%' }}>Overview</div>
            ),
          },
          { path: '/widgets/customers', element: <div>Customers</div> },
          { path: '/widgets/products', element: <div>Orders</div> },
        ],
      },
      { path: '/1', element: <div>1</div> },
      { path: '/2', element: <div>2</div> },
    ],
  },
]);

export default routes;
