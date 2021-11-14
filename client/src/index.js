import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { render } from 'react-dom'

 const appRoot = document.getElementById('root')
 appRoot.setAttribute('notranslate', true)
ReactDOM.render(<App />,
  appRoot
);
