import { CREATE_BUYING_ITEM, FETCH_BUYING_ITEM, DELETE_BUYING_ITEM} from '../actions/types';
import _ from 'lodash';

export default function(state = [], action){
    switch(action.type){
        case CREATE_BUYING_ITEM:
            return [...state, action.payload]
        case FETCH_BUYING_ITEM:
            return action.payload
        case DELETE_BUYING_ITEM:
            return [...state, _.omit(state, action.payload)]
        default:
            return state
    }
}