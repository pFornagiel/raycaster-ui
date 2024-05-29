import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

interface childrenType {
  children: string | JSX.Element | JSX.Element[]
}

const theme = createTheme({
  typography: {
    fontFamily: [
      "Pixelify Sans",
      "DotGothic16",
      'sans-serif'
    ].join(','),
  }
});

const AppTheme = ({ children }: childrenType) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

export default AppTheme;