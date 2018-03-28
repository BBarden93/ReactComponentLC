import React, { Component } from 'react';
import './App.css';
import Modal from './Modal';

class App extends Component {
  constructor(){
    super()
    this.state = {
      secondsOpen: 0,
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
    this.secondsTimer = setInterval(() => {
      this.setState({
        secondsOpen: this.state.secondsOpen + 1
      })
    })
  }

  handleHideModalClick() {
    this.setState({
      showModal: false 
    })
    clearInterval(this.secondsTimer)
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleShowModalClick.bind(this)}>Show Modal</button>
        {this.state.showModal && (
          <Modal 
            onClose={this.handleHideModalClick.bind(this)}
            modalTitle={this.state.secondsOpen}
            modalBody={"This is a body"}
          />
        )}
      </div>
    );
  }
}

export default App;
