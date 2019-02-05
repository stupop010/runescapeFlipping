import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems, fetchFavourite } from '../actions';

import Search from './Search';
import Favourite from './Favourite';
import BuyingItem from './buyingItem';


class DashBoard extends Component{
    componentDidMount(){
        this.props.fetchItems();
        // this.props.fetchFavourite();
      };

    render(){
            return(
                <>
                    <Search items={this.props.items}/>
                    <BuyingItem />
                </>

            )
        }
}

function mapStateToProp({ items }){
    return { items };
} 

export default connect(mapStateToProp, { fetchItems, fetchFavourite })(DashBoard)