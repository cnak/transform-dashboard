/* eslint-disable global-require */
import { runWithAdal } from 'react-adal';
import { authContext } from './adalConfig';

const DO_NOT_LOGIN = true;

runWithAdal(
  authContext,
  () => {
    require('./wrappedIndex.js');
  },
  DO_NOT_LOGIN
);
