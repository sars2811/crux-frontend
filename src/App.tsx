import React from 'react';
import { ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import themeOptions from './theme';
import routes from './router';

function App() {
  return (
    <ThemeProvider theme={themeOptions}>
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
}

export default App;
