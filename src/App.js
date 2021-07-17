import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as operations from './redux/pb-operations';
import * as selectors from './redux/pb-selectors';

// Components
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';
import Filter from './Components/Filter';

class App extends Component {

  componentDidMount() {
    this.props.fetchContacts()
  };
  
  render() {
    return (
      <div className="Container">
        {this.props.isLoading && <h1>LOADING...</h1>}
      
      <h2>Phonebook</h2>
      
        <ContactForm />
        
      <h2>Contacts</h2>
        
        <Filter />
        
        <ContactList />
        
      </div>
    )
  };
};

const mapStateToProps = state => ({
  isLoading: selectors.getIsLoading(state)
})

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(operations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
