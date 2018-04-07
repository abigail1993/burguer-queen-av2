import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";

//import Button from "./Button.js"
//import './App.css';




ReactDOM.render(<BrowserRouter><App /></BrowserRouter> ,document.getElementById('root'));
registerServiceWorker();
