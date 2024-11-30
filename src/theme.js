import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fc6203',
    },
    secondary: {
      main: '#f8f8f8',
      light: '#ffffff',
      dark: '#b0b0b0',
    },
    icon: {
      main: '#000000',
      yellow: '#f8c300',
    },
    link: {
      main: '#11629c',
    },
    typography: {
      main: '#7e7979',
      dark: '#000000',
      light: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default theme;
