import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography:{
    fontFamily:'dana'
  }
});

theme.typography.h3 = {
  fontSize: '1.2rem',
  [theme.breakpoints.up('xs')]: {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '3rem',
  },
};
theme.typography
function THEMEProvide({ children }: any) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
export default THEMEProvide;
