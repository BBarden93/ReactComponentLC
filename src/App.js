import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './Modal';

class App extends Component {
  constructor(){
    super()
    this.state = {
      showModal: false
    }
  }

  handleShowModalClick() {
    this.setState({
      showModal: true
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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.handleShowModalClick.bind(this)}>Show Modal</button>
        {this.state.showModal && <Modal onClose={this.handleHideModalClick.bind(this)}/>}
      </div>
    );
  }
}

export default App;
