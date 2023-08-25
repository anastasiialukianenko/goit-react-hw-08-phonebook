import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contacts: [],
    filter: "",
}


const appSlice = createSlice({
  // Ім'я слайсу
  name: "contacts",
  // Початковий стан редюсера слайсу
  initialState: initialState,
  // Об'єкт редюсерів
  reducers: {
    // addLocalStorageContacts(state, action) {
    //   return { ...state, contacts: [...action.payload] };
    // },
      addContacts(state, action) {
          state.contacts = [action.payload, ...state.contacts];
        // return {...state, contacts: [action.payload, ...state.contacts]}
    },
      deleteContacts(state, action) { 
          const deletedContactIndex = state.contacts.findIndex(post => post.id === action.payload);
          state.contacts.splice(deletedContactIndex, 1);
        //   state.contacts = state.contacts.filter(contacts => contacts.id !== action.payload);
        //  return {...state, contacts: state.contacts.filter(contacts => contacts.id !== action.payload)}
    },
      filterIsChanged(state, action) {
          state.filter = action.payload;
        //  return {...state, filter: action.payload}
    },
  },
});

// Генератори екшенів
export const { addLocalStorageContacts, addContacts, deleteContacts, filterIsChanged, } = appSlice.actions;

//генерація селекторів
export const selectContacts = state => state.appState.contacts;
export const selectFilter = state => state.appState.filter;

// Редюсер слайсу
export const appReducer = appSlice.reducer;

