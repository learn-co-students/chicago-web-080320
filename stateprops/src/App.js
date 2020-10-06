

import React from 'react';
import logo from './logo.svg'
import TodoContainer from './TodoContainer'
import './App.css'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todos: [
        {id: 1, task: 'clean room'},
        {id: 2, task: 'do dishes'},
        {id: 3, task: 'take out trash'}
      ]
    }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
         <h2>Todo App</h2>
         <TodoContainer todos={this.state.todos} />
        </header>

      </div>
    )
  }
}


export default App;











// valid JSX:
// 1) traditional HTML Nodes
// 2) JS expressions (wrapped within curly braces)
// 3) Other Components


// 2 things occur when using setState:
// a) the state value updates to whatever you provided
// b) the render method is triggered again
