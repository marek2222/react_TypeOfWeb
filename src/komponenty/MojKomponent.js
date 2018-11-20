import React, { Component } from 'react';
// import logo from '../logo.svg';
// import '../App.css';

function MojKomponent({ tytul, zawartosc }) {
    return (
      <div>
        <dialog open>
          <h1>{tytul}</h1>
          <p>{zawartosc}</p>
        </dialog>
      </div>
    );
  }

export default MojKomponent;
