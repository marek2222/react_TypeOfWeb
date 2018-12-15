import React from 'react';

export class MyControlledForm extends React.Component {
    state = {
        name: '',
        color: 'blue',
        message: '',
        isChecked: true,
    };
    
    changeProps = (e) => {
        const name = e.target.name;
        if(e.target.type != 'checkbox') {
            this.setState({
            [name]: e.target.value
            });
        }
        else {
            this.setState({
            [name]: e.target.checked
            });
        }
    }
  
    render() {
        return (
            <div>
            <input value={this.state.name} name="name" onChange={this.changeProps} />
            <select value={this.state.color} name="color" onChange={this.changeProps}>
                <option value="red">Czerwony</option>
                <option value="blue">Niebieski</option>
                <option value="green">Zielony</option>
            </select>
            <textarea value={this.state.message} name="message" onChange={this.changeProps} />
            <label>
                <input type="checkbox" checked={this.state.isChecked} name="isChecked" onChange={this.changeProps} />
            </label>
            </div>
        );
    }
}
