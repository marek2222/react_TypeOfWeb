import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import MojKomponent from './komponenty/MojKomponent';
import * as serviceWorker from './serviceWorker';

const render = () => (
    <React.Fragment>
        <MojKomponent />
    </React.Fragment>
);

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    render(), 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
