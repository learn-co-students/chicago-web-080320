



import React from 'react'

class TodoCard extends React.Component {

  handleClick = () => {
    this.props.deleteTodo(this.props.todo.id)
  }

 render(){
   return (
   <div>
     <p>{this.props.todo.task} <button onClick={this.handleClick}>X</button></p>
   </div>
   )
 }
}

export default TodoCard
