//第四步 创建 reduce
import { combineReducers } from "redux";

//创建一个reduce方法 方法可接受 状态值 和 action
const count=(state=0,action)=>{
  console.log(state);
  //通过action.type判断为哪个action 并对其做出相应的处理
  switch(action.type){
    case 'ADD':
      return state+action.step;
    default :
      return state;
  }
}

//将reduce方法放入combineReducers方法中使其能够工作
const reduce = combineReducers({
  count,
})

export default reduce;