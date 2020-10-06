

import React from 'react'

class TodoContainer  extends React.Component {


  renderTodos = () => {
    const todoArr = this.props.todos.map(todoObj => {
      return <h4>{todoObj.task}</h4>
    })

    console.log(todoArr)
    return todoArr
  }


 render(){
   return (
     <div>
      { this.renderTodos() }
     </div>
   )
 }
}

export default TodoContainer
