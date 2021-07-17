import axios from 'axios';
import {
    addContactsRequest,
    addContactsSucces,
    addContactsError,
    deleteContactsRequest,
    deleteContactsSucces,
    deleteContactsError,
    fetchContactsRequest,
    fetchContactsSucces,
    fetchContactsError,
} from './pb-actions';


    axios.defaults.baseURL = 'http://localhost:4040/';


export const fetchContacts = () => dispatch => {
    dispatch(fetchContactsRequest());

    axios.get('/contacts')
        .then(res => dispatch(fetchContactsSucces(res.data)))
        .catch(error => dispatch(fetchContactsError(error)));
};

export const addContact = (name, number) => dispatch => {
    dispatch(addContactsRequest());

    axios.post('/contacts', { name, number })
        .then(({data}) => dispatch(addContactsSucces(data)))
        .catch(error => dispatch(addContactsError(error)));
};

export const deleteContact = contactId => dispatch => {
    dispatch(deleteContactsRequest());

    axios.delete(`/contacts/${contactId}`)
        .then(res => dispatch(deleteContactsSucces(contactId)))
        .catch(error => dispatch(deleteContactsError(error)));
};
