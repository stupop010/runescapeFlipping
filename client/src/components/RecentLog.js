import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItemLog } from '../actions'
import NumberFormat from 'react-number-format';


class RecentLog extends Component{
    componentDidMount(){
        this.props.fetchItemLog();
    }

    renderItems = () => {
        return this.props.itemLog.map((item) => {
            return(
                <div className='card shadow border border-dark m-1' key={item._id} style={{fontSize: '12px'}}> 
                    <div style={{backgroundColor: '#e6e6e6'}}>
                        <p className='m-1 text-center font-weight-bold'>{item.name} x{item.howMany}</p>
                        <p className='m-1 text-center'>Buy for: <NumberFormat value={item.buyFor * item.howMany} displayType={'text'} thousandSeparator={true}/></p>
                        <p className='m-1 text-center'>Sold for: <NumberFormat value={item.sellFor * item.howMany} displayType={'text'} thousandSeparator={true}/></p>
                        <p className='m-1 text-center'>Profit/Lost: <NumberFormat value={(item.sellFor - item.buyFor) * item.howMany} displayType={'text'} thousandSeparator={true}/></p>
                    </div>
                </div>
            )
        })
    }

    render(){
        return(
             <div style={{backgroundColor: '#999D9E'}}>
                 <span className="d-block p-2 bg-dark text-white text-center">Recently Flipped</span>
                 {this.renderItems()}
             </div>
        )
    }
}

function mapStateToProps({ itemLog }){
    return { itemLog }
}

export default connect(mapStateToProps, { fetchItemLog })(RecentLog)