import './ContactList.css';
import React, { Component } from 'react';
import { connect } from "react-redux";
import * as operations from '../../redux/pb-operations';
import * as selectors from '../../redux/pb-selectors';
import shortid from "shortid";

const ContactList = ({ contacts, onDeleteContact }) => {
    
    

    return (

        <div className="Contact-container">
            <ul className="Contact-container__list">
                {contacts.map(contact => (
                    <li key={shortid.generate()} className="Contact-container__item">{contact.name}: {contact.number}
                        <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
};

const mapStateToProps = state => ({
    contacts: selectors.getVisibleContacts(state)
    // const { items, filter } = state.contacts;
    // const normalizeFilter = filter.toLowerCase();
    // const visibleContacts = items.filter(item => item.name.toLowerCase().includes(normalizeFilter));
    // return { contacts: visibleContacts }
});

const mapDispatchToProps = dispatch => ({
    
    onDeleteContact: id => dispatch(operations.deleteContact(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);