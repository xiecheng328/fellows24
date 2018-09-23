import React, { Component } from 'react';
import Header from './../global/Header';
import './../../assets/css/Home.css';
import Slider from './Slider';
import Middle from './Middle';
import ShopList from './ShopList'

export default class Home extends Component {
  componentDidMount(){
    
  }
  render() {
    return (
      <div>
        <Header/>
        <Slider/>
        <Middle/>
        <ShopList history={this.props.history}/>
      </div>
    )
  }
}
