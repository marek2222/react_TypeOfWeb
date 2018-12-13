import * as React from 'react';
import UsersList from './UsersList'

// z braku laku istniających userów definiuję po prostu jako stałą
// w prawdziwej aplikacji pochodziliby z API i/lub byli w Reduksowym storze 
const allUsers = ['Michal', 'Kasia', 'Jacek', 'Marta', 'Tomek', 'Ania'];

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      filteredUsers: allUsers,
      selectedUser: null
    };
  }

  filterUsers = (e) => {
    const text = e.currentTarget.value;
    const filteredUsers = this.getFilteredUsersForText(text)
    this.setState({
      filteredUsers
    })
  }

  getFilteredUsersForText(text) {
    return allUsers.filter(user => user.toLowerCase().includes(text.toLowerCase()))
  }

  // Coś się wydarzyło w komponencie-dziecku i musisz poinformować o tym rodzica. 
  // Przykładowo: Na naszej liście kontaktów, użytkownik zaznaczył kontakt, a rodzic musi wiedzieć, 
  // który kontakt został zaznaczony. Jak to zrobić?
  onUserSelected = (selectedUser) => {
    this.setState({
      selectedUser
    })
  }

  render() {
    return (
      <div>
        {this.state.selectedUser}
        <input onInput={this.filterUsers} />
        <UsersList userSelected={this.onUserSelected} users={this.state.filteredUsers} />
      </div>
    );
  }
};

export default App;
