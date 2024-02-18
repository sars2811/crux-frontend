import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../containers/Root';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <div>Home</div> },
      { path: '/about', element: <div>About</div> },
      { path: '/contact', element: <div>Contact</div> },
    ],
  },
]);

export default routes;
