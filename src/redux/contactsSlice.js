import { createSlice } from "@reduxjs/toolkit"

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const contactsInitialState = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    
  filter: '',
}

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContact(state, action) {
      if (!(state.contacts.filter(contact => contact.name.toLowerCase() === action.payload.name.trim().toLowerCase())).length) {
        return {
          ...state, contacts: [action.payload, ...state.contacts]
        }
      } else alert(`${action.payload.name} is already in contacts`)
        return state
    },

    deleteContact(state, action) {
      const newContacts = state.contacts.filter(contact => contact.id !== action.payload)
      return {
        ...state, contacts: newContacts
      }
    },

    filterContacts(state, action) {
      return {
        ...state, filter: action.payload
      }
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts']
}

export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer)

export const { addContact, deleteContact, filterContacts } = contactsSlice.actions;