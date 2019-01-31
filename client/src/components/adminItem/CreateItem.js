import React, { Component } from 'react'
import { connect } from 'react-redux';
import EditItem from './editItem'
import { createItem } from '../../actions';

class CreateItem extends Component{

    onSubmit = formValue => {
        this.props.createItem(formValue)
    }

    render(){
        return(
            <div className="container">
                <EditItem onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

export default connect(null, { createItem })(CreateItem)