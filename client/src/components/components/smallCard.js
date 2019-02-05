import React, { Component } from 'react';
import { connect } from 'react-redux'

import { createBuyingItem, addFavourite } from '../../actions'
import '../css/result.css';
import ImageCard from './imageCard';

class SmallCard extends Component{
    onSubmit = (e) => {
        this.props.createBuyingItem(this.props.item._id)
        this.props.clearSearch(e)
        e.preventDefault()
    }
    addFavorites = (e, name, id) => {
        const item = {
            name,
            id
        }
        this.props.addFavourite(item)
        e.preventDefault()
    }
    render(){
        const {name, limit, _id } = this.props.item
        if(this.props.error){
            return (
                <div className='results-list'>
                    <div className='result-item'>
                        <span className="m-r">Can Not Found That Item</span>  
                    </div>
                </div>
            )
        }
        return (
            <div className='results-list'>
                <div className='result-item'>
                    <ImageCard item={this.props.item} className="m-r"/>
                    <span className="m-r">{name}</span>
                    <span className="m-r">limit: {limit}</span>
                    <button className="" onClick={(e) => this.onSubmit(e)}>Submit</button>
                    <button className="" onClick={(e) => this.addFavorites(e, name, _id)}>Add Favorites</button>
                </div>
            </div>
        )
    }
}

export default connect(null, { createBuyingItem, addFavourite })(SmallCard)