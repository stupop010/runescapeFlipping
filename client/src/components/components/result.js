import React, { Component } from 'react';
import SmallCard from './smallCard'
import '../css/result.css'

class Result extends Component{
    reRender = () => {
        return this.props.items.map((item) => {
            return(
                <SmallCard item={item} clearSearch={this.props.clearSearch} key={item._id}/>
            )
        })
    }

    render(){
        if(this.props.items.length === 0){
            return <div></div>
        }
        return (
            <div className='dropdown'>
                <div className= 'dropdown-content'>
                    {this.reRender()}
                </div>
            </div>
        )
    }
}

export default Result