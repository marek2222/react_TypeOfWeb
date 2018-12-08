import * as React from 'react';
// import UsersList from './UsersList'

const allUsers = ['Marek', 'Darek', 'Ania', 'Wandzia', 'Mariola', 'Jurek'];

class App2 extends React.Component {
  constructor() {
    super();

    this.state = {
      filteredUsers: allUsers
    };
  }

  filterUsers = (event) => {
    const text = event.currentTarget.value;
    const filteredUsers = allUsers.filter(user => user.toLowerCase.includes(text.toLowerCase()));
    this.setState({
      filteredUsers  
    });
  }

  render() {
    return(
      <div>
        <input onInput={this.filterUsers} placeholder='Filtruj...' />
        <UserList users={this.state.filteredUsers} />
      </div>
    );
  }

}

const UsersList = (users) => {
  return(
    <ul>
      {users.map(user => <li key={user}>{user}</li>)}
    </ul>
  );
};

export default App2;
