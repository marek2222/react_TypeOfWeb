import React, { Component } from 'react';
import './App.css';


class App extends React.Component{
    constructor(props){
        super(props);
    }    
    render(){
        return (
            <main className="ui main container">
                <Parent />
            </main>
        );
    }
}

class Parent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            parentNumber : 0,
            sentNumber: 0
        };
    }
    sendFarAway(){
        this.setState({
           sentNumber: this.state.parentNumber 
        });
    }

    updateInput(e){
        this.setState({
            parentNumber : parseInt(e.target.value)
        });
    }

    render(){
        return (
            <div className="ui container">
                <div className="ui right labeled left icon input">
                    <i className="tags icon"></i>
                    <input type="number" placeholder="Podaj liczbę" value={this.state.parentNumber} onChange={this.updateInput.bind(this)} />
                    <a className="ui tag label" onClick={this.sendFarAway.bind(this)} >Przekaż</a>
                </div>
                <br /> <br />

                <SweetChild liczba={this.state.sentNumber} />
            </div>
        );
    }
}

class SweetChild extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fromParent: parseInt(props.liczba)
        };
    }

    componentWillReceiveProps(nextProps){
        if(this.props.liczba !== nextProps.liczba){
            this.setState({
               fromParent: parseInt(nextProps.liczba)
            });
        }
    }

    incrementValue(){
        this.setState({
            fromParent: this.state.fromParent + 1
        });
    }

    decrementValue(){
        this.setState({
            fromParent: this.state.fromParent -1
        });
    }

    render(){
        return (
           <div className="ui card">
                <div className="content">
                    <div className="header">
                        Wartość przekazana od rodzica: <br />
                        <div className="ui segment">
                            <h1 className="ui center aligned">{this.state.fromParent}</h1>
                        </div>
                        
                        <br />
                    </div>
                    <div className="extra content">
                        <div className="ui buttons fluid">
                          <button className="ui negative button" onClick={this.decrementValue.bind(this)}>zmniejsz</button>
                          <div className="or" data-text="lub"></div>
                          <button className="ui positive button" onClick={this.incrementValue.bind(this)} >zwiększ</button>
                        </div>
                    </div>
                    
                </div>
                
           </div>
        );
    }
}

export default App;


// Rodzic pozwala na ustawienie (input + button + onClick+ setState) jakiejś wartości liczbowej
//   i przekazuje ją do dziecka jako props.
// Dziecko ma początkowo wyświetlać liczbę podaną od rodzica, a dodatkowo ma umożliwiać
//   zwiększanie i zmniejszanie tej liczby (button + onClick + setState).
// W momencie gdy rodzic ustawi liczbę, dziecko powinno zresetować swój stan 
//    do podanej liczby (componentWillReceiveProps).


