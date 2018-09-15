import React, { Component } from 'react'
import {
  BrowserRouter as Router, 
  Route, 
  Link ,
  Switch,
  Redirect,
  withRouter,
  Prompt,
  NavLink
 } from "react-router-dom";
const Home = ()=><h3>home</h3>
const About = ({match})=>{
  return <h3>aubout{match.params.id}</h3>
}
const MenuLink = ({to,lable})=>{
  return(
    <Route 
      path={to}
      children={()=>{
       return(
        <div>
          <Link to={to}>{lable}</Link>
        </div>
       )
      }}
    />
  )
}
const RouteChange = withRouter(({history})=>{
  return(
    <div>
      <button onClick={()=>{history.push('/class1/')}}>首页</button>
    </div>
  )
})
class Class1 extends Component {
  constructor(props) {
    super(props);
    this.state={
      isPrompt:false
    }
  }
  
  render() {
    return (
      <Router>
      <div>
        <Prompt
          when={this.state.isPrompt}
          message="确认跳转？"
        />
        <RouteChange/>
        <NavLink isActive={()=>false} activeClassName="aaa" exact to="/class1/">home</NavLink>|
        <NavLink activeStyle={{color:'red'}} activeClassName="aaa" to="/class1/about/111">about</NavLink>|
        <NavLink activeClassName="aaa" to="/class1/redirect">redirect</NavLink>
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
