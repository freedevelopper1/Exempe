import { createStore } from "redux"

//types constant
export const types = {
  INCREASE: "INCREASE",
  DECREASE: "DECREASE",
  RESET: "RESET",
  INCREASEODD:"INCREASEODD"
}

// actions
// action = objet
export const increase = () => {
  //action
  return {
    // type: "INCREASE"
    type: types.INCREASE,
  }
}

export const increaseodd = () => {
  //action
  return {
    // type: "INCREASE"
    type: types.INCREASEODD,
  }
}
export const decrease = () => {
  return {
    type: types.DECREASE,
  }
}

export const reset = () => {
  return {
    type: types.RESET,
  }
}


//initial state in the store
const initState = {
  count: 0,
  name: "",
  age: 18,
}
// REDUCERS ==> toujours (state, action)=> newState
const counter = (state = initState, action) => {
  switch (action.type) {
    case types.INCREASE:
      // state.count+=1// noooooooon

      // 1ère solution (non recommandé)
      // const newState={}
      // newState.count=state.count+1
      // return newState

      // 2ème solution
      // const newState={...state}
      // newState.count+=1
      // return newState

      // 3ème solution
      const newState = {
        ...state, // count :0 , age:18, name:""
        count: state.count + 1,
      }
      return newState

    case types.DECREASE:
      return {
        ...state,
        count: state.count - 1,
      }
    case types.RESET:
      return {
        ...state,
        count: 0,
      }
     
    case types.INCREASEODD:
      if(state.count % 2==1)
{
        return {
          ...state,
          count:  state.count+1
        }  
      }
      else{
        return {
          ...state,
          count:  state.count
        }  
      }
    
    default:
      return state
  }
}

const tasks = (state = initState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
//create store
const store = createStore(
  counter,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
console.log(store.getState())

export default store

// montrer ici comment faire avec combine reducer
// const rootReducer = () => {
//   return combineReducers({
//     counter,
//     tasks,
//   })
// }
// const store = createStore(
//   rootReducer(),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )
