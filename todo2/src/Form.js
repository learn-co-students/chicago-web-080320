
import React from 'react'

class Form extends React.Component {

  constructor(){
    super()
    this.state = {
      task: 'cat'
    }
  }

  handleChange = (event) => {
    this.setState({
      task: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newTodo = {...this.state, id: 4}
    this.props.addTodo(newTodo)
  }

 render(){
   return (
   <form onSubmit={this.handleSubmit}>
     <input type='text' value={this.state.task} onChange={this.handleChange} />
     <input type='submit' />
   </form>
   )
 }
}

export default Form


