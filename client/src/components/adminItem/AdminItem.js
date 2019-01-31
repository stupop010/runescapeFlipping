import React, { Component }  from 'react';
//import _ from 'lodash'
import EditItem from './editItem';
import { connect } from 'react-redux'
import { editItem, fetchItem } from '../../actions/index';

class AdminItem extends Component{
    componentDidMount(){
        this.props.fetchItem(this.props.itemId)
    }

    onSubmit = formValue => {
        this.props.editItem(this.props.itemId, formValue)
    }

    render(){
        return(
            <div className="container">
                <EditItem onSubmit={this.onSubmit} initialValues={this.props.newItem.itemState}/>
            </div>
        );
    }
};

const mapStateToProp = (state, ownProps) => {
    const itemState = state.items.undefined
    const newItem = {itemState}
    return { itemId: ownProps.match.params.id, newItem }
}

export default connect(mapStateToProp, { editItem, fetchItem })(AdminItem)