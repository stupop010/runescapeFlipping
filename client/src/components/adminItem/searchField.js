import React from 'react'
import NumberFormat from 'react-number-format';

export default ({ input, label, meta: {error, touched} } ) => {
    console.log(input)
    return(
        <div className="form-group">
            <label>{label}</label>
            <NumberFormat thousandSeparator={true} name={input.name} value={input.value}/>
            <div className="red-text" style={{ marginBottom: '20px'}}>
                {touched && error}
            </div>
        </div>
    )
}

{/* <NumberFormat thousandSeparator={true} name={input.name} value={input.value}/>
<input {...input} className="form-control" /> */}