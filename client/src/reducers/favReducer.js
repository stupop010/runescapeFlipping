import { ADD_FAVOURITE, FETCH_FAVOURITE } from '../actions/types'

export default function(state = [], action){
    switch(action.type){
        case FETCH_FAVOURITE:
            return action.payload
        case ADD_FAVOURITE:
            return [...state, action.payload]
        default:
            return state
    }
}