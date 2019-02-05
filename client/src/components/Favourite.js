import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFavourite, createBuyingItem } from '../actions/index';
import './css/favouriteCss.css';

class Favourite extends Component {
    componentDidMount(){
        this.props.fetchFavourite()
    }
    onSubmit = (e, item) =>{
        this.props.createBuyingItem(item)
        e.preventDefault()
    }
    renderFavourites = () =>{
        return this.props.favourite.map((item) => {
            return(
                <li key={item.id}><button className="favourite-button" onClick={(e) => this.onSubmit(e, item.id)}>{item.name}</button></li>
            )
        })
    }
    render(){
        return(
            <div className="contanier">
                <span className="favourite-span">Favourites:</span>
                <ul>
                    {this.renderFavourites()}
                </ul>
            </div>
        )
    }
}

function mapStateToProp({ favourite }){
    return { favourite };
} 

export default connect(mapStateToProp, { fetchFavourite, createBuyingItem } )(Favourite);