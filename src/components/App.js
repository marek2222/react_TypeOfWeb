import React, { Component } from 'react';
import './App.css';
import ContactsList from './ContactsList';
import AppHeader  from './AppHeader';


class App extends React.Component {
    render() {
        return (
            <div>
                <AppHeader />
                <main className="ui main text container">
                    <ContactsList />
                </main>
            </div>
        );
    }
}

export default App;
