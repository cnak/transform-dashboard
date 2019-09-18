/* eslint-disable global-require */
import { runWithAdal } from 'react-adal';
import React from 'react';
import ReactDOM from 'react-dom';
import { authContext } from './adalConfig';
import './index.css';
import App from './App';

const DO_NOT_LOGIN = false;

runWithAdal(
    authContext,
    () => {
        ReactDOM.render(
            <App />,
            // eslint-disable-next-line no-undef
            document.getElementById('root')
        );
    },
    DO_NOT_LOGIN
);
