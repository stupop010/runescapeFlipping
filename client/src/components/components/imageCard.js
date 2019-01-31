import React from 'react';

const ImageCard = (props) => {
        const {name, picture} = props.item
        return(
            <span className="item-img">
                <img 
                    alt={name}
                    src={picture}
                />   
            </span>
        )
}


export default ImageCard