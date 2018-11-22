import './App.css';

import React, { Component } from 'react';

import AppHeader from './AppHeader';
import ContactsList from './ContactsList';


class App extends React.Component {
    constructor(){
        super();
        this.state = {clicks: 0, suum:0, counterDouble: 0};
        
    }
    render() {
        return (
            <div>
                {/* <AppHeader />
                <ContactsList />
                <hr/> */}
                <button onClick={this.increment.bind(this)}>+</button>
                <output>{this.state.clicks}</output>
                <button onClick={this.decrement.bind(this)}>-</button>
            </div>
        );
    }
    increment(){
        console.log('clicks: było: ', this.state.clicks);
        console.log('suum: było: ', this.state.suum)
        this.setState({
                clicks: this.state.clicks + 1,
                suum: this.state.suum + 1
            }, () => {
                console.log('clicks: jest: ', this.state.clicks);
                console.log('suum: jest: ', this.state.suum)
                console.log('')
            }
        )
    }
    decrement(){
        console.log('clicks: było: ', this.state.clicks);
        console.log('suum: było: ', this.state.suum)
        this.setState({
                clicks: this.state.clicks - 1,
                suum: this.state.suum + 1
            }, () => {
                console.log('clicks: jest: ', this.state.clicks);
                console.log('suum: jest: ', this.state.suum)
                console.log('')
            }
        )
    }
}

export default App;