import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function MojKomponent(){
    return (
        <div>
            <h1>Witaj Świecie!</h1>
            <h2>Przerabiam kurs react.js</h2>
        </div>
    );
}

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<MojKomponent />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
