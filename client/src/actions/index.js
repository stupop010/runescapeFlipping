import axios from 'axios';
import history from '../history'
import { FETCH_ITEMS, DELETE_ITEM, EDIT_ITEM, FETCH_ITEM, CREATE_ITEM, CREATE_BUYING_ITEM, FETCH_BUYING_ITEM, DELETE_BUYING_ITEM, FETCH_ITEM_LOG, FETCH_USER, CREATE_ITEM_LOG, ADD_FAVOURITE, FETCH_FAVOURITE, GET_ERRORS, FAVOURITE_FAILED } from './types';


// Fetching user
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user')
    
    dispatch({ type: FETCH_USER, payload: res.data });
};


// ALL THE ITEMS
export const fetchItems = () => async dispatch => {
    const res = await axios.get('/api/items');

    dispatch({ type: FETCH_ITEMS, payload: res.data})
}

export const fetchItem = id => async dispatch => {
    const res = await axios.get(`/api/id/`,{
        params:{
            id
        }
    });
    
    dispatch({ type: FETCH_ITEM, payload: res.data})
}

export const deleteItem = id => async dispatch => {
    await axios.delete(`/api/delete`, {data: { item: id}});
    
    dispatch({ type: DELETE_ITEM, payload: id});

    history.push('/admin')
}

export const editItem = (id, formValues ) => async dispatch => {
    const res = await axios.patch(`/api/edit/id/`, formValues);
    dispatch({ type: EDIT_ITEM, payload: res.data})
    history.push('/admin')
}

export const createItem = (formValues) => async dispatch =>{
    const res = await axios.post('/api/create', formValues)

    dispatch({ type: CREATE_ITEM, payload: res.data})
    history.push('/admin')
}

// buying item
export const createBuyingItem = (formValues) => async dispatch =>{
    const res = await axios.post('/buyingItem/create', formValues)

    dispatch({ type: CREATE_BUYING_ITEM, payload: res.data})
    history.push('/')
}

export const fetchBuyingItems = () => async dispatch =>{
    const res = await axios.get('/buyingItem/items')

    dispatch({ type: FETCH_BUYING_ITEM, payload: res.data})
}

export const deleteBuyingItem = id => async dispatch => {
    await axios.delete('/buyingItem/delete', {data: { item: id}})
    
    dispatch({ type: DELETE_BUYING_ITEM, payload: id })
}


// ITEM LOG
export const fetchItemLog = () => async dispatch => {
    const res = await axios.get('/itemlog/items')

    const item = res.data.sort(function(a,b){
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.date) - new Date(a.date);
    });
    const size = 5;
    const itemSize = item.slice(0, size);

    dispatch({ type: FETCH_ITEM_LOG, payload: itemSize})
}

export const createItemLog = (item) => async dispatch => {
    const res = await axios.post('/itemlog/create', item)
    
    dispatch({ type: CREATE_ITEM_LOG, payload: res.data })
}

// Favourites
export const addFavourite = (item) => async dispatch => {
    try{
        const res = await axios.post('/favourite/add', item)
        dispatch({ type: ADD_FAVOURITE, payload: res.data })
    } catch(err){
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
            type: FAVOURITE_FAILED
          });
    }
}

export const fetchFavourite = () => async dispatch => {
    const res = await axios.get('/favourite/fetch')

    dispatch({ type: FETCH_FAVOURITE, payload: res.data})
}


// Errors 

export const returnErrors = (msg, status) => {
    return {
        type: GET_ERRORS,
        payload: { msg, status }
      };

};