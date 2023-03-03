import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { contactsReducer } from "./contacts/contactsSlice";



const persistConfig = {
    storage,
    key: 'contacts'
}

const contactsPersistedReducer = persistReducer(persistConfig, contactsReducer)

export const rootReducer = combineReducers({
    contacts: contactsPersistedReducer
})


