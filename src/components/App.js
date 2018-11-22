import './App.css';

import React, { Component } from 'react';

import AppHeader from './AppHeader';
import ContactsList from './ContactsList';


class App extends React.Component {
    constructor(){
        super();
        this.state = {imie: '', nazwisko: ''};
    }
    render() {
        return (
            <div>
                <AppHeader />
                <ContactsList />
                <hr/>
                Imię:       <input type='text' value={this.state.imie} onInput={this.onInputImieHandler.bind(this)}></input>
                <br/>
                Nazwisko: <input type='text' value={this.state.nazwisko} onInput={this.onInputNazwiskoHandler.bind(this)}></input>
                <br/>
                <label>Wpisałeś: {this.state.imie} {this.state.nazwisko}</label>
            </div>
        );
    }
    onInputImieHandler(event){
        this.setState({ imie: event.target.value })
    }
    onInputNazwiskoHandler(event){

    }
}

export default App;