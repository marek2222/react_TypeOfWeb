import './App.css';

import React, { Component } from 'react';

import AppHeader from './AppHeader';
import ContactsList from './ContactsList';


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = { dateVisble: true };
    }
    render() {
        return (
            <div>
                <AppHeader />
                <ContactsList />
                <hr/>
                <button onClick={this.onClickButton.bind(this)} >Kliknij</button>
                {this.state.dateVisble && <DateComponent />}
            </div>
        );
    }
    onClickButton(){
        this.setState(state => ({ dateVisble: !this.state.dateVisble }))
    }
}

class DateComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        };
    }
    
    componentDidMount(){
        this.timerId = window.setInterval(this.updateDate.bind(this), 1000);
    }
    componentWillUnmount(){
        window.clearInterval(this.timerId);
    }
    updateDate(){
        this.setState({
            date: new Date()
        });
    }

    render() {
        const dateStr = this.state.date.toString();
        return <time>{dateStr}</time>;
    }
}


export default App;