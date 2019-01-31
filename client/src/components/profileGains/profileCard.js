import React from 'react';
import NumberFormat from 'react-number-format';

const ProfileCard = (props) => {
    return(
        <div className="card" style={{backgroundColor: '#999D9E'}}>
            <div className="card-body text-center p-2" style={{fontSize: '14px'}}>
                <p className="m-1 font-weight-bold">{props.username}</p>
                {/* <p className="m-1">Today's total: </p>
                <p className="m-1">Weekly total: </p>
                <p className="m-1">Monthly total: </p> */}
                <NumberFormat value={props.total} displayType={'text'} thousandSeparator={true} renderText={value => <p>Total: {value}</p>} />
            </div>
        </div>
    )
}

export default ProfileCard;