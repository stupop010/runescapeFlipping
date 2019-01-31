import React, { Component }from 'react';
import { connect } from 'react-redux';
import { fetchBuyingItems, deleteBuyingItem, createItemLog} from '../actions'

import NumberFormat from 'react-number-format';
import ImageCard from './components/imageCard'
import './css/itemList.css';

class BuyingItem extends Component{
    state = { buyFor: '', sellFor: '', howMany: ''}

    componentDidMount(){
        this.props.fetchBuyingItems()
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onClickSubmit = (e, item) => {
        e.preventDefault()
        item.buyFor = this.state.buyFor
        item.sellFor = this.state.sellFor
        item.howMany = this.state.howMany
        this.setState({
            buyFor: '',
            sellFor: '',
            howMany: ''
        })
        this.props.createItemLog(item)
        this.onClickDelete(e, item)

    }

    onClickDelete = (e, item) => {
        e.preventDefault()
        this.props.deleteBuyingItem(item._id)
        this.props.fetchBuyingItems()
    }
    
    render(){
        if (!Array.isArray(this.props.buyingItem) || !this.props.buyingItem.length) {
            return <div></div>
          }
        return(
            <div className="bg-dark p-1" >
                <span className="d-block p-2 bg-dark text-white text-center">Currently Buying/Selling</span>
                {this.RenderItem()}
            </div>
        )
    }

    RenderItem = () => {
        return(
            this.props.buyingItem.map(item => {
                return(
                    <div className="card image-list p-1 m-1" key={item._id}>
                        <div>
                            <ImageCard item={item}/>
                            <span className="card-title title">{item.name}</span>
                            <span className="card-title">Limit: {item.limit}</span>
                            <form className="mt-1" >
                                <div className="form-group sml-txt">
                                        <label className="m-1">Buy for: 
                                            <NumberFormat thousandSeparator={true} name="buyFor" defaultValue=''
                                                onChange={e => this.handleChange(e)}/>
                                        </label>
                                        <label className="m-1">Sell for: 
                                            <NumberFormat thousandSeparator={true} name="sellFor" defaultValue=''
                                                onChange={e => this.handleChange(e)}/>
                                        </label>
                                        <label className="m-1">How many: 
                                            <input name="howMany" defaultValue='' onChange={e => this.handleChange(e)}></input>
                                        </label>
                                        <button className="btn m-1 btn-light" onClick={(e) => this.onClickSubmit(e, item)}>Sumbit</button>
                                        <button className="btn m-1 btn-light" onClick={(e) => this.onClickDelete(e, item)}>Cancel</button>
                                </div>
                            </form>               
                        </div>
                    </div>       
                )
            })
        )
    }
}

function mapStateToProps({buyingItem}){
    return { buyingItem }
}

export default connect(mapStateToProps, { fetchBuyingItems, deleteBuyingItem, createItemLog })(BuyingItem)