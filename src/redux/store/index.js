import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import rootReducers from '../reducers';

const initialState = {};

// Redux-persist configuration
const persistConfig = {
  key: 'root',
  storage, // define which storage to use
};

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducers);

// Create store
const store = createStore(
  persistedReducer,
  initialState,
  applyMiddleware(thunk),
);

// Create persisted store
const persistedStore = persistStore(store);

export { store, persistedStore };
