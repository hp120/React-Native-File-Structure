import { compose, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  timeout: null
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, compose(applyMiddleware(thunk)));

export const persistor = persistStore(store);