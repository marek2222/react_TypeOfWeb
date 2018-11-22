import './App.css';

import React, { Component } from 'react';

import AppHeader from './AppHeader';
import ContactsList from './ContactsList';


class App extends React.Component {
    constructor(){
        super();
        this.state = {counter: 0, suum:0, counterDouble: 0};
        
    }
    render() {
        return (
            <div>
                <AppHeader />
                <ContactsList />
                <hr/>
                <button onClick={this.increment.bind(this)}>+</button>
                <output>{this.state.counter}</output>
                <button onClick={this.decrement.bind(this)}>-</button>
                <br/>
                <output onDoubleClick={this.double.bind(this)}>Suma kliknięc: {this.state.suum}</output>
                <br/>
                <output>Podwojne kliknięcia: {this.state.counterDouble}</output>
            </div>
        );
    }
    increment(){
        this.setState({
            counter: this.state.counter + 1,
            suum: this.state.suum + 1
        })
    }
    decrement(){
        this.setState({
            counter: this.state.counter - 1,
            suum: this.state.suum + 1
        })
    }
    double(){
        this.setState({
            counterDouble: this.state.counterDouble +1
        })
    }
}

export default App;