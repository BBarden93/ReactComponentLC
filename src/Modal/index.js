import React from 'react'
import './Modal.css'

class Modal extends React.Component {
    // runs once when component finsihes loading for the first time
    componentDidMount(){
        console.log("Modal has mounted.")
        setTimeout(this.props.onClose, 5000)
    }
    componentWillUnmount(){
        console.log("Modal is about to unmount.")
        alert("You are about to lose your modal")
    }
    
    render() {
    const props = this.props     
        return ( 
            <div className="Modal">
            <div className="container">
                <button onClick={props.onClose}>X</button>
                <div className="title">
                    <h1>{props.modalTitle}</h1>
                </div>
                <div className="body">
                    <p>{props.modalBody}</p>
                </div>
            </div>
            </div>
        )
    }
}

export default Modal