import './App.css';

import React, { Component } from 'react';

import AppHeader from './AppHeader';
import ContactsList from './ContactsList';

// Rodzic
class App extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            inputVal: null, 
            przesylanaWartosc: null 
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick    = this.handleClick.bind(this);
    }
    handleChange(event){
        this.setState({ inputVal: event.target.value });
    }
    handleClick(){
        this.setState({ przesylanaWartosc: this.state.input });
    }

    render() {
        return (
            <div>
                <input type='number' onChange={this.handleChange} />
                <button onClick={this.handleClick} >Przenieś do dziecka</button>
                {this.state.przesylanaWartosc && <Dziecko value={this.state.przesylanaWartosc} />}
            </div>
        );
    }
}

// Rodzic pozwala na ustawienie (input + button + onClick+ setState) jakiejś wartości liczbowej
//   i przekazuje ją do dziecka jako props.
// Dziecko ma początkowo wyświetlać liczbę podaną od rodzica, a dodatkowo ma umożliwiać
//   zwiększanie i zmniejszanie tej liczby (button + onClick + setState).
// W momencie gdy rodzic ustawi liczbę, dziecko powinno zresetować swój stan 
//    do podanej liczby (componentWillReceiveProps).
class Dziecko extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            odRodzica: Number(props.value),
            aktualny: Number(props.value)
        };
        this.handleZwieksz = this.handleZwieksz.bind(this);
        this.handleZmniejsz = this.handleZmniejsz.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.value !== this.state.odRodzica) {
            this.setState({
                odRodzica: Number(nextProps.value),
                aktualny: Number(nextProps.value)
            });
        }        
    }
    handleZwieksz(){
        this.setState({ aktualny: this.state.aktualny + 1 });
    }
    handleZmniejsz(){
        this.setState({ aktualny: this.state.aktualny - 1 });
    }
    render() {
        return (
            <div>
                <label>{this.state.aktualny}</label>
                <button onClick={this.handleZwieksz}>+</button>
                <button onClick={this.handleZmniejsz}>-</button>
            </div>
        );
    }
}


export default App;