import React, { Component } from 'react'
import {
  BrowserRouter as Router, 
  Route, 
  Link ,
  Switch,
  Redirect
 } from "react-router-dom";
const Home = ()=><h3>home</h3>
const About = ({match})=>{
  console.log(match);
  return <h3>aubout{match.params.id}</h3>
}
const MenuLink = ({to,lable})=>{
  return(
    <Route 
      path={to}
      children={({match})=>{
       return(
        <div>
          <Link to={to}>{lable}</Link>
        </div>
       )
      }}
    />
  )
}
class Class1 extends Component {
  render() {
    return (
      <Router>
      <div>
        <Link to="/class1/">home</Link>|
        <Link to="/class1/about/111">about</Link>|
        <Link to="/class1/redirect">redirect</Link>
        <MenuLink to="/class1/" lable="menulink"/>
        <Route exact path="/class1/" render={()=><h3>renderhome</h3>}/>
        <Route path="/class1/about/:id" component={About}/>
        <Route path="/class1/redirect" render={()=><Redirect to="/class1/"/>}/>
      </div>
      </Router>
    )
  }
}
export default Class1
