import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
        <App /> 
        <App2 /> 
    </div>, 
document.getElementById('root'));
serviceWorker.unregister();
