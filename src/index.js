import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import { MyControlledForm  } from './MyUnControlledForm';
import * as serviceWorker from './serviceWorker';

ReactDOM.render( <MyControlledForm /> , document.getElementById('root'));
serviceWorker.unregister();
