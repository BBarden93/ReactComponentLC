import React from 'react'
import './Modal.css'

const Modal = (props) => {
    return (
        <div className="Modal">
         <div className="container">
            <button onClick={props.onClose}>X</button>
            <div className="title">
                <h1>Modal Showing Here</h1>
            </div>
            <div className="body">
                <p>This is the modal body</p>
            </div>
         </div>
        </div>
    )
}

export default Modal