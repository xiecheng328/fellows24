import { combineReducers } from "redux";

const count=(state=0,action)=>{
  console.log(state);
  
  switch(action.type){
    case 'ADD':
      return state+1;
    default :
      return state;
  }
}

const reduce = combineReducers({
  count,
})

export default reduce;