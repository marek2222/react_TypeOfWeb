import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import MojKomponent from './komponenty/MojKomponent';
import * as serviceWorker from './serviceWorker';


//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <MojKomponent 
        tytul='Jesteś zadowolony?' 
        zawartosc='To było prostsze niż mogło się wydawać, prawda?'></MojKomponent>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
