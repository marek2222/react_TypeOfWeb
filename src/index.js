import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import MojKomponent from './komponenty/MojKomponent';
import * as serviceWorker from './serviceWorker';


//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <div>
        <MojKomponent  zawartosc='To jest <b>HTML</b>' />
        {/* <MojKomponent  zawartosc={To jest <b>HTML</b>} /> */}
        <MojKomponent  zawartosc={<span>To jest <b>HTML</b></span>} />
    </div>,     
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
