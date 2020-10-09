
import React from 'react'

class HogTile extends React.Component {
  constructor(){
    super()
    this.state = {
      showDetails: false
    }
  }


 renderImage = () => {
   const fileName = this.props.name.toLowerCase().split(" ").join("_")
   const image = require(`../hog-imgs/${fileName}.jpg`) 

   return <img src={image} />
 }

  renderDetails = () => {
   const { weight, specialty, ['highest medal achieved']:medal } = this.props

   return (
     <div > 
      <p>weight: {weight}</p>
      <p>specialty: {specialty}</p>
      <p>medal: {medal}</p>
     </div>
   )
  }

  handleClick = () => {
    this.setState({
      showDetails: !this.state.showDetails
    })
  }

 render(){
   const { name } = this.props

   const fileName = name.toLowerCase().split(" ").join("_")
   const image = require(`../hog-imgs/${fileName}.jpg`) 

   return (
   <div className="ui card pigTile" onClick={this.handleClick}>
     <h4>{name}</h4>
     <img src={image} />
     <div style={{minHeight: '100px'}}> 
     {this.state.showDetails ? this.renderDetails() : null }
     </div > 
   </div>
   )
 }
}

export default HogTile
