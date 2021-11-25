import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import userReducer from './reducers/UserReducer';

const reducers = combineReducers({
    userState: userReducer
});

const localState = localStorage.getItem('applicationState')
 ? JSON.parse(localStorage.getItem('applicationState'))
 : {};

 const store = createStore(
    reducers,
    localState,
    applyMiddleware(thunk)
 );

 store.subscribe( function () {
    localStorage.setItem('applicationState', JSON.stringify(store.getState()));
});

export default store;