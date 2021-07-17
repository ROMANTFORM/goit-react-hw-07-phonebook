import './ContactForm.css';
import React, { Component } from 'react';
import { connect } from "react-redux";

import shortid from "shortid";
import * as operations from '../../redux/pb-operations';


class ContactForm extends Component{
    state = {
        name: '',
        number: ''
    };

    onInputChange = evt => {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    };
    
    handleSubmit = evt => {
        evt.preventDefault();
        const { name, number } = this.state;
       
        this.props.addContact(name, number);

        this.setState({ name: "", number: "" });   
    };
    
    render()
    {
        const inputId = shortid.generate();
        const { name, number } = this.state;

        return (
            <div className="Container-form">

                    <form className="form" onSubmit={this.handleSubmit}>
                        <label htmlFor={inputId}>
                            Name
                            <br></br>
                            <input
                                className="Container-form__input"
                                type="text"
                                name="name"
                                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                                required
                                value={name}
                                onChange={this.onInputChange}
                            />
                        </label>
                        <br></br>
                        <label>
                            Number
                            <br></br>
                            <input
                                className="Container-form__input"
                                type="tel"
                                name="number"
                                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                                title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                                required
                                value={number}
                                onChange={this.onInputChange}
                            />
                        </label>
                        <br></br>
                      <button type="submit" className="Container-form__btn">Add Contact</button>  
                    </form>
                 
                </div>
        )
    };
};

const mapDispatchToProps = dispatch => ({
    
    addContact: (name, number) => dispatch(operations.addContact(name, number)),
});

export default connect(null, mapDispatchToProps)(ContactForm);