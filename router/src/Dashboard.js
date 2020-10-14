


import React from 'react'

class Dashboard extends React.Component {

 render(){
   console.log(this.props, '------');
   return (
   <div>
     This is the Dasboard
     hello {this.props.match.params.username}
   </div>
   )
 }
}

export default Dashboard
