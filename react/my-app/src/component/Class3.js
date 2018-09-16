import React, { Component } from 'react'
import {
  BrowserRouter as Router, 
  Route, 
  Link ,
  Switch
 } from "react-router-dom";

const Home=()=><h1>home</h1>;
const About=()=><h1>about</h1>;

const MenuLink = ({to,label})=>{
  return(
    <Route 
      path={to}
      exact
      children={({match})=>
        <div>
          {match?">":""}
          <Link to={to}>{label}</Link>
        </div>
      }
    />
  )
}

export default class Class3 extends Component {
  render() {
    return (
      <Router>
      <div>
        {/* <Link to="/">home</Link> */}
        {/* <Link to="/about">about</Link> */}
        <MenuLink to="/" label="home"/>
        <MenuLink to="/about" label="about"/>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </div>
      </Router>
    )
  }
}
