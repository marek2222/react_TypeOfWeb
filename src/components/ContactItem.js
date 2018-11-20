import React from 'react';
// import React, { Component } from 'react';


class ContactItem extends React.Component {
    render() {
        const { login, name, department } = this.props
        const imgUrl = `../img/${login}.png`;
        return (
            <li className="item">
                <img src={imgUrl} className="ui mini rounded image" />
                <div className="content">
                    <h4 className="header">{name}</h4>
                    <div className="description">{department}</div>
                </div>
            </li>
        );
    }
}

export default ContactItem;