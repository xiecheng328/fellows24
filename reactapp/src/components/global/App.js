import React, { Component } from 'react';
import './../../assets/css/App.css';
import Test from '../../Test'
// import img from './../../assets/img/dianying.png'

class App extends Component {
  render() {
    let img = "dianying";
    return (
      <div className="App">
        <img src={require(`./../../assets/img/${img}.png`)} alt=""/>
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Test/>
      </div>
    );
  }
}

export default App;
