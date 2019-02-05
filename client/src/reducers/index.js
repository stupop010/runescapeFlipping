import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';
import { reducer as formReducer } from 'redux-form';
import buyingItemReducer from './buyingItemReducer';
import itemLog from './itemLogReducer';
import authReducer from './authReducer';
import favReducer from './favReducer';
import messagesReducer from './messagesReducer';

export default combineReducers({
    items: itemsReducer,
    form: formReducer,
    buyingItem: buyingItemReducer,
    itemLog: itemLog,
    auth: authReducer,
    favourite: favReducer,
    error: messagesReducer
    
})
