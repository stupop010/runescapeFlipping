import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems, fetchFavourite } from '../actions';

import Search from './Search';
import Favourite from './Favourite';
import BuyingItem from './buyingItem';
import RecentLog from './RecentLog';
import ProfileGains from './profileGains/profileGains';

class DashBoard extends Component{
    componentDidMount(){
        this.props.fetchItems();
        this.props.fetchFavourite();
      };

    render(){
            return(
                <div>
                    <div className="row">
                    <div className="col-sm-2">
                        <Favourite />
                    </div>
                    <div className="col col-sm-8">
                        <Search items={this.props.items}/>
                        <BuyingItem />
                    </div>
                    <div className="col-sm-2">
                        <div>
                            <ProfileGains />
                        </div>
                        <div style={{backgroundColor: '#999D9E'}} className="border border-dark">
                            <RecentLog />
                        </div>
                    </div>
                    </div>
                </div>

            )
        }
}

function mapStateToProp({ items }){
    return { items };
} 

export default connect(mapStateToProp, { fetchItems, fetchFavourite })(DashBoard)