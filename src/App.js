import React, { Component } from 'react';
import './App.css';
import Modal from './Modal';

class App extends Component {
  constructor(){
    super()
    this.state = {
      currentDate: new Date(),
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
    setInterval(() => {
      this.setState({
        currentDate: new Date()
      })
    })
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
            modalTitle={this.state.currentDate.toString()}
            modalBody={"This is a body"}
          />
        )}
      </div>
    );
  }
}

export default App;
