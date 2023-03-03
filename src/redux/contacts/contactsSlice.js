import { createSlice } from "@reduxjs/toolkit";
import { contactsInitialState } from "./contactsInitialState";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter((contact) => contact.id !== action.payload)
        },
        createNewContact: (state, action) => {

            state.contacts.unshift(action.payload);
        },
        filterContacts: (state, action) => {
            state.filter = action.payload.toLowerCase();
        }
    }
})

export const contactsReducer = contactsSlice.reducer;
export const { deleteContact, createNewContact, filterContacts } = contactsSlice.actions;

export const getContacts = state => {
    return state.contacts.contacts.filter(contact =>
        contact.name.toLowerCase().includes(state.contacts.filter)
    );
};

export const getFilterContact = state => state.contacts.filter;

