import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItem, deleteItem } from '../../actions/index';
import { Link } from 'react-router-dom';



class DeleteItem extends Component {
    componentDidMount(){
        this.props.fetchItem(this.props.itemId)
    }

    delete = () => {
        this.props.deleteItem(this.props.itemId)
    }

    render(){
        const item = this.props.newItem.itemState
        if(!item){
            return <div></div>
        }
        return (
            <div className="jumbotron bg-white mt-5">
                <div className="container">
                    <h1 className="text-center">Are you sure?</h1>
                    <div className="card bg-white">
                        <div className="card-body">
                            <p className="text-center">{item.name}</p>

                        </div>
                    </div>
                    <Link className="btn btn-secondary m-2" to={'/admin'}>Cancel</Link>
                    <button className="btn float-right btn-success m-2" onClick={this.delete}>Delete Item</button>
                </div>
            </div>
        )
    }
}

const mapStateToProp = (state, ownProps) => {
    const itemState = state.items.undefined
    const newItem = {itemState}
    return { itemId: ownProps.match.params.id,
        newItem
    }
}

export default connect(mapStateToProp, { fetchItem, deleteItem })(DeleteItem)