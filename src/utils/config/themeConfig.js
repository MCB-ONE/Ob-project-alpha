import { createTheme } from '@material-ui/core';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#797ba3',
    },
    secondary: {
      main: '#e4e6ff',
    },
    warning: {
      main: '#efdb0a',
    },
    success: {
      main: '#0AEF81',
    },
    error: {
      main: '#fd0f46',
    },
    text: {
      primary: '#070707',
      secondary: '#9698bd',
    },
  },
});

export default theme;
