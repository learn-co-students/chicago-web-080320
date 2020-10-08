

import './App.css'
import React from 'react';
import Form from './Form'
import TodoContainer from './TodoContainer'
import logo from './logo.svg'



class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todos: {
        name: 'My Todo App',
        createdAt: 'now',
        list: [
          {id: 1, task: 'clean room'},
          {id: 2, task: 'do dishes'},
          {id: 3, task: 'take out trash'}
        ]
      }
    }
  }

  addTodo = (newTodo) => {
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  deleteTodo = (id) => {
    const updatedTodos = this.state.todos.list.filter(todoObj => todoObj.id !== id )

    this.setState({
      todos: {
        ...this.state.todos,
        list: updatedTodos
      }
    })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
         <h2>{this.state.todos.name}</h2>
         <button onClick={this.removeTodos}>clear Todos</button>
         <Form addTodo={this.addTodo} />
         <TodoContainer todos={this.state.todos.list} deleteTodo={this.deleteTodo} />
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
