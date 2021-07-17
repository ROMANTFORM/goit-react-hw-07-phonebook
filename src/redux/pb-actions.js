import { createAction } from '@reduxjs/toolkit';


export const fetchContactsRequest = createAction('fetchContactsRequest');
export const fetchContactsSucces = createAction('fetchContactsSucces');
export const fetchContactsError = createAction('fetchContactsError');

export const addContactsRequest = createAction('addContactsRequest');
export const addContactsSucces = createAction('addContactsSucces');
export const addContactsError = createAction('addContactsError');

export const deleteContactsRequest = createAction('deleteContactsRequest');
export const deleteContactsSucces = createAction('deleteContactsSucces');
export const deleteContactsError = createAction('deleteContactsError');



// export const addContact = createAction('addContact', (name, number) => ({
//     payload: {id: shortid.generate(), name, number}
// }));
// export const deleteContact = createAction('deleteContact');
export const filterContact = createAction('fitlerContact');