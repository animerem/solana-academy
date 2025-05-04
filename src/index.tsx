import * as React from 'react';
import ReactGA from 'react-ga';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { App } from './app/App.controller';
import { configureStore } from './app/App.store';
import { unregister } from './serviceWorker';
import { GlobalStyle } from './styles';
import TagManager from 'react-gtm-module';

import './styles/fonts.css';

export const store = configureStore({});

ReactGA.initialize('UA-192160338-1');

const gtmId = process.env.REACT_APP_GTM_ID;
if (gtmId) {
  TagManager.initialize({ gtmId });
} else {
  console.warn('GTM ID is not set in environment variables.');
}

export const Root = () => {
  return (
    <div>
      <GlobalStyle />
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </div>
  );
};

// Unregister service worker for development. Use register() to enable offline support.
unregister();
