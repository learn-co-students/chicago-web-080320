

import React from 'react'
import TodoCard from './TodoCard'

class TodoContainer  extends React.Component {

  renderTodos = () => {
    const todoArr = this.props.todos.map(todoObj => {
      return <TodoCard todo={todoObj} deleteTodo={this.props.deleteTodo}/>
    })

    return todoArr
  }


 render(){
   const myObj = { key: 'ba'}
   return (
     <div>
      { this.renderTodos() }
     </div>
   )
 }
}

export default TodoContainer
