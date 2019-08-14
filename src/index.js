/* eslint-disable react/jsx-filename-extension */
/* eslint-env browser */

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const title = 'React with Webpack and Babel';

ReactDOM.render(<App title={title} />, document.getElementById('app'));

if (process.env.NODE_ENV === 'development') module.hot.accept();
