//第二步创建store
import {createStore} from 'redux';
import reduce from './reduce'

//定义state的初始值
let initialState={
  count:10
}
//使用 createStore 分别传入reduce 和 状态值
const store = createStore(reduce,initialState);

export default store;
