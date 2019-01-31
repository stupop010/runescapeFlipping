import React from 'react';
import NumberFormat from 'react-number-format';
import ImageCard from '../components/imageCard'

const BuyingCard = (props) => {
    const item = props.item
    return(
        <div className="card image-list p-1 m-1" key={item._id}>
            <div>
                <ImageCard item={item}/>
                <span className="card-title title">{item.name}</span>
                <span className="card-title">Limit: {item.limit}</span>
                <form className="mt-1" >
                    <div className="form-group sml-txt">
                            <label className="m-1">Buy for: 
                                <NumberFormat thousandSeparator={true} name="buyfor" defaultValue={item.buyFor}
                                    onChange={e => props.handleChange(e)}/>
                            </label>
                            <label className="m-1">Sell for: 
                                <NumberFormat thousandSeparator={true} name="sellfor" defaultValue={item.sellFor}
                                    onChange={e => props.handleChange(e)}/>
                            </label>
                            <label className="m-1">How many: 
                                <input name="howMany" defaultValue={item.howMany}></input>
                            </label>
                            <button className="btn m-1 btn-light" onClick={(e) => props.onClickSubmit(e, item)}>Sumbit</button>
                            <button className="btn m-1 btn-light" onClick={(e) => props.onClickDelete(e, item)}>Cancel</button>
                    </div>
                </form>            
            </div>
        </div>
    )
}

export default BuyingCard

