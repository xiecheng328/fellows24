import React, { Component } from 'react';
import Header from './../global/Header'

export default class Detail extends Component {
  componentDidMount(){
    console.log(this.props.match.params);
    
  }
  render() {
    return (
      <div>
        <Header/>
      </div>
    )
  }
}
