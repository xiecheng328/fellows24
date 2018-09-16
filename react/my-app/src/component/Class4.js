import React, { Component } from 'react'
import {
  BrowserRouter as Router, 
  Route, 
  Link ,
  Switch,
  Prompt
 } from "react-router-dom";

const One =()=><h1>one</h1>;
const Two =()=><h1>two</h1>;

class Form extends Component{
  constructor(props) {
    super(props);
    this.state={
      isBack:false
    }
    this.change=this.change.bind(this);
    this.submit=this.submit.bind(this);
  }
  submit(even){
    even.target.reset()
    even.preventDefault();
  }
  change(even){
    console.log(even.target.value.length)
    this.setState({
      isBack:even.target.value.length>0
    })
  }
  render(){
    return(
      <div>
        <form onSubmit={this.submit}>
          <Prompt 
            when={this.state.isBack}
            message="确定跳转"
          />
          <p> <input onChange={this.change} type="text"/> </p>
          <p> <button>提交</button> </p>
        </form>
      </div>
    )
  }
  
}
 
export default class Class4 extends Component {
  render() {
    return (
      <Router>
      <div>
        <Link to="/one">one</Link>|
        <Link to="/two">two</Link>|
        <Link to="/form">form</Link>
        <Route path="/one" component={One}/>
        <Route path="/two" component={Two}/>
        <Route path="/form" component={Form}/>
      </div>
      </Router>
    )
  }
}
