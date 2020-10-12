import React from 'react'
import { Card, Icon, Button } from 'semantic-ui-react'

class ContactCard extends React.Component {

  handleDelete = () => {
    // make a delete request
    // when it comes back 
    // call the callback function from app.js
    
   const { id, deleteContact } = this.props

    fetch(`http://localhost:3000/contacts/${id}`, { method: 'DELETE'})
    .then(resp => resp.json())
    .then(data => {
      deleteContact(id)
    })
  }

  handleImportance = () => {
    this.props.markAsImportant(this.props.id)
  }


 render(){
   const { id, name, isImportant, number, email, linkedIn, deleteContact } = this.props

   const cardStyles = {
     border: isImportant ? '4px solid red' : ''
   }

   return (
     <Card style={cardStyles}>
       <Card.Content>
         <Card.Header>{name}</Card.Header>
         <Card.Meta>
           <span className='date'>{email}</span>
         </Card.Meta>
         <Card.Description>
           <span className='date'>{number}</span>
         </Card.Description>
       </Card.Content>
       <Card.Content extra>
         <a href={linkedIn}>
       { linkedIn ? <Icon name='linkedin' /> : null}
         </a>
        <div className='ui two buttons'>
          <Button basic color='green' onClick={() => this.props.markAsImportant(id)}>
           { isImportant ? 'unimportant' : 'important'}
          </Button>
          <Button basic color='red' onClick={this.handleDelete}>
            Delete
          </Button>
        </div>
       </Card.Content>
     </Card>

   )
 }
}

export default ContactCard
