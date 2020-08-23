import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "typeface-montserrat";
import { ThemeProvider } from '@material-ui/core/styles'
import theme from "./theme";
import {IntlProvider} from "react-intl";



ReactDOM.render(
  <React.StrictMode>
  <IntlProvider locale = 'en'>
  <ThemeProvider theme={theme}>
        <App />
</ThemeProvider>
</IntlProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
