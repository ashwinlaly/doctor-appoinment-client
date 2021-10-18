import LinearProgress from '@mui/material/LinearProgress';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignIn from './Pages/Signin/Signin';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LinearProgress />
        <SignIn/>
    </ThemeProvider>
  );
}

export default App;
