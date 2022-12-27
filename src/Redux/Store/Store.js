import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import Reducer from '../Reducer/Reducer';

export const Store=createStore(Reducer,applyMiddleware(thunk))