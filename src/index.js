import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { theme } from "./theme";
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <GlobalStyle />
      <Normalize />
      <App />
    </React.StrictMode>
  </ThemeProvider>
);

reportWebVitals();
