import React, { Component } from 'react';
import ContactItem from './ContactItem';

class ContactsList extends React.Component {
    render(){
        return (
            <main className="ui main text container">
                <ul className="ui relaxed divided list selection">
                    <ContactItem login="typeofweb1" name="Lena"  department="JavaScript Developer" />
                    <ContactItem login="typeofweb2" name="Brian" department="Human Resources" />
                    <ContactItem login="typeofweb3" name="Rick"  department="QA" />
                </ul>
            </main>
        );
    }
}

export default ContactsList
