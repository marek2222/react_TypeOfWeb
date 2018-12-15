import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MyControlledForm  } from './MyControlledForm';
import * as serviceWorker from './serviceWorker';

ReactDOM.render( <MyControlledForm /> , document.getElementById('root'));
serviceWorker.unregister();
