import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <h1>Hello World!</h1>,
  },
]);

export default routes;
