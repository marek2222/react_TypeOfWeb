import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import KomponentPierwszy from './komponenty/KomponentPierwszy';
import * as serviceWorker from './serviceWorker';


const HelloKomponent = ()=> (
    <p>Hellooooooo</p>
);

const render = () => (
    <React.Fragment>
        <HelloKomponent />
        <HelloKomponent />
        <HelloKomponent />
        <KomponentPierwszy />
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
