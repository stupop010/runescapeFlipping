import { FETCH_ITEM_LOG, CREATE_ITEM_LOG} from '../actions/types';

export default function(state = [], action){
    switch(action.type){
        case FETCH_ITEM_LOG:
            return action.payload
        case CREATE_ITEM_LOG:
            const item = [...state, action.payload].sort(function(a,b){
                // Turn your strings into dates, and then subtract them
                // to get a value that is either negative, positive, or zero.
                return new Date(b.date) - new Date(a.date);
            });
            const size = 5;
            const itemSize = item.slice(0, size);
            return itemSize
        default:
            return state
    }
}