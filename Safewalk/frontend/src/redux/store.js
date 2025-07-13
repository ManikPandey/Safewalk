import { createStore, combineReducers } from 'redux';
import userReducer from './reducers';

const rootReducer = combineReducers({
    users: userReducer,
});

export const store = createStore(rootReducer);
