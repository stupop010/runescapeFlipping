import React from 'react';
import ReactDOM from 'react-dom';

import './css/modal.css'

const Modal = (props) =>{
    console.log(props)
        return ReactDOM.createPortal(
            <div className="full">
                <div className="main">
                    <div className="header">
                            items name
                    </div>
                    <div className="content">
                        {props.content.props.children}
                    </div>
                </div>
            </div>,
            document.querySelector('#modal')
        );

};

export default Modal;