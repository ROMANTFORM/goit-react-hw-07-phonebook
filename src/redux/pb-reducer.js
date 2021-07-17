import { combineReducers } from "redux";
import { createReducer } from '@reduxjs/toolkit';
import {
    addContactsRequest,
    addContactsSucces,
    addContactsError,
    deleteContactsRequest,
    deleteContactsSucces,
    deleteContactsError,
    filterContact,
    fetchContactsRequest,
    fetchContactsSucces,
    fetchContactsError,
} from './pb-actions';


const items = createReducer([], {
    [fetchContactsSucces]: (state, action) => action.payload,

    [addContactsSucces]: (state, action) => [action.payload, ...state],

    [deleteContactsSucces]: (state, action) => state.filter(contact => contact.id !== action.payload),
});

const filter = createReducer('', {
    [filterContact]: (state, action) => action.payload,
});

const loading = createReducer(false, {
    [fetchContactsRequest]: () => true,
    [fetchContactsSucces]: () => false,
    [fetchContactsError]: () => false,

    [addContactsRequest]: () => true,
    [addContactsSucces]: () => false,
    [addContactsError]: () => false,

    [deleteContactsRequest]: () => true,
    [deleteContactsSucces]: () => false,
    [deleteContactsError]: () => false,
});

export default combineReducers({
    items,
    filter,
    loading,
});