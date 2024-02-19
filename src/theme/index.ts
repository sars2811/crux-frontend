import { createTheme } from "@mui/material";

const themeOptions = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#5e5adb',
      dark: '#282828',
      light: '#e0dff8',
    },
    background: {
      default: '#f4f4ff',
    },
    text: {
      secondary: '#5e5adb',
      primary: '#8d8d8d',
    },
  },
})

export default themeOptions;
