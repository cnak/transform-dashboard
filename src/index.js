import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { setupCognito } from 'react-cognito';

import './index.css';
import store from './store';
import App from './App';
import config from './config.json';

setupCognito(store, config);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    // eslint-disable-next-line no-undef
    document.getElementById('root')
);
