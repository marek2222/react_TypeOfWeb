import React from 'react';
import ReactDOM from 'react-dom';
import {    shallow} from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});



import React from 'react';
import ReactDOM from 'react-dom';
import { shallow} from 'enzyme';
import App from './App';
import UsersList from './UsersList';

it('renders without crashing', () => {
    shallow( <App /> );
});

it('includes input', () => {
    const app = shallow( <App /> );
    expect(app.containsMatchingElement( <input /> )).toEqual(true)
});

it('includes UsersList', () => {
    const app = shallow( <App /> );
    expect(app.containsMatchingElement( <UsersList /> )).toEqual(true)
});

it('passes all users to the UsersList', () => {
    const app = shallow( <App /> );
    expect(app.find('UsersList').prop('users')).toEqual(['Michal', 'Kasia', 'Jacek', 'Marta', 'Tomek', 'Ania']);
})
