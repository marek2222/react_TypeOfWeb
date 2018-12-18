import React from 'react';

export class MyControlledForm extends React.Component {
    
    submitForm = () => {
        console.log('Wartości pól: ');
        console.log('- pole input: '+ this.myInput.value);
        console.log('- pole select: '+ this.mySelect.value);
        console.log('- pole textarea: '+ this.myTextarea.value);
        console.log('- pole checkbox: '+ this.myCheckbox.value);
        console.log();
    }
    
    render() {
        return (
            <div>
                <input type='text' name='name' ref={input => this.myInput = input} /><br/>
                <select name="color" defaultValue="blue"  ref={select => this.mySelect = select}>
                    <option value="red">Czerwony</option>
                    <option value="blue">Niebieski</option>
                    <option value="green">Zielony</option>
                </select><br/>
                <textarea name="message" ref={textarea => this.myTextarea = textarea}  /><br/>
                <label>
                    <input type="checkbox" name="isChecked" ref={input => this.myCheckbox = input} />
                </label><br/>
                <button onClick={this.submitForm}>Submit</button>
            </div>
        );
    }
}
