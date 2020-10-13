

import React from 'react'

class WalletForm extends React.Component {

  constructor(){
    super()
    this.state ={
      money: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      money: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.updateBudget(this.state.money)
  }

 render(){
   return (
   <form onSubmit={this.handleSubmit}>
     <input type='text' value={this.state.money} onChange={this.handleChange} />
     <input type='submit' />
   </form>
   )
 }
}

export default WalletForm
