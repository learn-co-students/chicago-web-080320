

import React from 'react'
import ContactCard from './ContactCard'
import { Card } from 'semantic-ui-react'

const ContactsContainer = (props) => {

  const renderContacts = () => {
     return props.contacts.map(contact => {
       return <ContactCard {...contact} markAsImportant={props.markAsImportant} deleteContact={props.deleteContact} />
     })
  }

  return (
    <Card.Group itemsPerRow={3} style={{ minWidth: '95vw' }}>
      { renderContacts() }
    </Card.Group>
  )
}

export default ContactsContainer
