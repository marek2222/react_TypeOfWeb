import React, { Component } from 'react';
// import logo from '../logo.svg';
// import '../App.css';

function MojKomponent({ tytul='Modal', zawartosc }) {
    return (
      <div>
        <dialog open>
          <h1>{tytul}</h1>
          <p>{zawartosc}</p>
          <footer><a href="https://typeofweb.com/">Tak, typeofweb!</a></footer>
        </dialog>
      </div>
    );
}

export default MojKomponent;
