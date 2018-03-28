import React, { Component } from 'react';
import './App.css';
import Modal from './Modal';

class App extends Component {
  constructor(){
    super()
    this.state = {
      showModal: false
    }
  }

  componentDidMount() {
    console.log("App component mounted.")
  }

  handleShowModalClick() {
    this.setState({
      showModal: true
    })
    setTimeout(this.handleHideModalClick.bind(this), 5000)
  }

  handleHideModalClick() {
    this.setState({
      showModal: false 
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleShowModalClick.bind(this)}>Show Modal</button>
        {this.state.showModal && (
          <Modal 
            onClose={this.handleHideModalClick.bind(this)}
            modalTitle={"This is a title"}
            modalBody={"This is a body"}
          />
        )}
      </div>
    );
  }
}

export default App;
