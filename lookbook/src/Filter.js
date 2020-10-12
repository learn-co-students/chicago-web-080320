


import React from 'react'
import { Button } from 'semantic-ui-react'

class Filter extends React.Component {
 render(){
   return (
   <Button onClick={this.props.showImportant}> Show Important </Button>
   )
 }
}

export default Filter
