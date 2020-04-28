import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyle from './theme/styleGlobal';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

