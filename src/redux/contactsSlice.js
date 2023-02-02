import { createSlice } from "@reduxjs/toolkit"

const contactsInitialState = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    
  filter: '',
}



// const contactsInitialState = [
//     {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//     ]

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContact(state, action) {
      // state.contacts.push(action.payload);
      if (!(state.contacts.filter(contact => contact.name.toLowerCase() === action.payload.name.trim().toLowerCase())).length) {
      // state.contacts.push(action.payload);
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

export const { addContact, deleteContact, filterContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;