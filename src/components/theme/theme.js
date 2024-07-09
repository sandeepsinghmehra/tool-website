import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontSize: 16, // Set the default font size for the entire project
    fontFamily: 'Roboto, sans-serif',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#f48fb1',
    },
  },
  typography: {
    fontSize: 16, // Set the default font size for the entire project
    fontFamily: 'Roboto, sans-serif',
  },
});

export { lightTheme, darkTheme };