import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import 'react-toastify/dist/ReactToastify.css';

import './index.css';
import App from './App';
import Store from './Redex/store';

import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <ThemeProvider theme={theme}>
        <Suspense fallback={
            <div>Loading...</div>
          }>
          <App />
        </Suspense>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
