import './App.css';
import React from 'react';
// import React, { Component } from 'react';

const users = ['Adam', 'Marcin', 'Dorota', 'Zenek', 'Jakub', 'Roksana', 'Lena'];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputText: '',
      filteredUsers: users
    };
  }
  
  handleOnInput = e => {
    const text = e.currentTarget.value;
    this.getFilteredUsers(text)
      .then(filteredUsers => {
        // verify that app is still in the same state
        if(text !== this.state.inputText) return;

        this.setState({ filteredUsers });
      });
  }
  
  getFilteredUsers(text) {
    // record relevant app state
    this.setState({ inputText: text });
      
    return new Promise(resolve => {
      const time = (Math.random() + 1) * 250;
      setTimeout(() => {
        const filteredUsers = users.filter(user => user.toLowerCase().includes(text.toLowerCase()));
        resolve(filteredUsers);
      }, time);
    });
  }
  
  render() {
    return (
      <div>
        <input value={this.state.input} onInput={this.handleOnInput} placeholder="Find user"/>
        <UsersList users={this.state.filteredUsers} />
      </div>
    );
  }
}

const UsersList = ({ users }) => {
  if(users.length) {
      return (
        <ul>
          {users.map(user => <li key={user}>{user}</li>)}  
        </ul> 
      );
    }

  return ( 
    <p>No Results</p> 
  );
}

 
export default App;