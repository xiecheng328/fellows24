import React, { Component } from 'react';
import {connect} from 'react-redux'

//第三步 创建 action
//action
const add=(num)=>{
  console.log("action");
  return{
    type:'ADD',
    step:num
  }
}

class Class5 extends Component {
  addHadle(){
    this.props.add(10)
  }
  render() {
    return (
      <div>
        <p>{this.props.count}</p>
        <button onClick={this.addHadle.bind(this)}>加一</button>
      </div>
    );
  }
}

//第五步引入 connect 并向组件内部传入两个参数 可将dispatch 和 state转化成该组件的props
const mapStateToProps = (state)=>{
  return{
    count:state.count
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    add:(num)=>dispatch(add(num))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Class5);