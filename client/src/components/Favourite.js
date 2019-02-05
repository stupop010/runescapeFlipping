import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFavourite } from '../actions/index'

class Favourite extends Component {
    componentDidMount(){
        this.props.fetchFavourite()
    }
    render(){
        console.log(this.props)
        return(
            <div>
                Favourites
            </div>
        )
    }
}

function mapStateToProp({ favourite }){
    return { favourite };
} 

export default connect(mapStateToProp, { fetchFavourite } )(Favourite);