import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Navbar from './App.js';
import * as serviceWorker from './serviceWorker';
// import { render } from 'react-dom';

import Rout from './customjs/CustomRoute';

// ReactDOM.render(<Navbar />, document.getElementById('root'));
ReactDOM.render(<Rout />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
