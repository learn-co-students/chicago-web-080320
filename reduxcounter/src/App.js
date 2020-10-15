
import React from 'react';

import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux'




const initialState = {
  count: 0,
  clicks: 9
}


const reducer = (currentState=initialState, action) => {
  switch(action.type){
    case 'ADD':
      return {
        ...currentState,
        count: currentState.count + 1,
        clicks: currentState.clicks + 1
      }
    case 'SUBTRACT':
      return {
        ...currentState,
        count: currentState.count - 1,
        clicks: currentState.clicks + 1
      }
    case 'RESET_CLICKS':
      return {
        ...currentState,
        clicks: 0
      }
    default: 
      return currentState
  }


  // if (action.type === 'ADD') {
    // return {
      // count: currentState.count + 1
    // }
  // } else if (action.type === 'SUBTRACT'){
    // return {
      // count: currentState.count - 1
    // }
  // }
  // return currentState
}




const store = createStore(
  reducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)













class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title />
          <Counter />
        </header>
      </div>
    );
  }
}

class Title extends React.Component {
  constructor(){
    super()

    store.subscribe(() => {
      this.forceUpdate()
    })
  }

  handleReset = () => {
    const action = {
      type: "RESET_CLICKS"
    }

    store.dispatch(action)
  }

  render() {
    return (
      <div>
          <h4>Welcome to the Click Counter</h4>
          <h6>Your current Count: {store.getState().count}</h6>
          <h6>Your Total Click Count: {store.getState().clicks}</h6>

          <button onClick={this.handleReset}>RESET CLICKS</button>
      </div>
    );
  }
}


class Counter extends React.Component {
  constructor(){
    super()

    store.subscribe(() => {
      this.forceUpdate()
    })
  }


  handleAdd = () => {
    const action = {
      type: 'ADD'
    }

    store.dispatch(action)
  }

  handleSubtract = () => {
    const action = {
      type: 'SUBTRACT'
    }

    store.dispatch(action)
  }

  render() {
    return (
      <div>
       <h4>{store.getState().count}</h4>
      <button onClick={this.handleSubtract}>-</button>
      <button onClick={this.handleAdd}>+</button>
      </div>
    );
  }
}








export default App;






// Reducer
//  - Passed into the createStore upon creation of the store.
//  - Determines what the state will be.
//  - receives 2 arguments:
//     - the current state
//     - the action being dispatched
//  - Everytime an action is dispatched the reducer gets invoked
//  - It determines the next state value


// Dispatch
//  - The only way to update the state of our store is to use the dispatch method
//  - the dispatch method expects 1 arg: an action
//  - an action is an object and has, at least, a key called type
//  - When a dispatch happens:
//    - the action gets sent off to the reducer






