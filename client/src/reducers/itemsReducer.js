import { FETCH_ITEMS, DELETE_ITEM, EDIT_ITEM, FETCH_ITEM, CREATE_ITEM } from '../actions/types';
import _ from 'lodash';

export default function(state = [], action){
    switch(action.type){
        case DELETE_ITEM:
            return [...state, _.omit(state, action.payload)]
        case EDIT_ITEM:
            return { ...state, [action.payload.id]: action.payload}
        case FETCH_ITEM:
            return action.payload
        case FETCH_ITEMS:
            return action.payload
        case CREATE_ITEM:
            return action.payload
        default:
            return state
    }
}