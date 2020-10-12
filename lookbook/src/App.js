
import React from 'react';
import './App.css';
import FormContainer from './Form'
import ContactsContainer from './Contacts'
import Filter from './Filter'
import 'semantic-ui-css/semantic.min.css'


class App  extends React.Component {
  constructor(){
    super()
    this.state = {
      contacts: [],
      showImportant:false
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/contacts')
    .then(resp => resp.json())
    .then(contactsArr => {

      const updatedContacts = contactsArr.map( c => {
        return {
          ...c,
          isImportant: false
        }
      })


      this.setState({
        contacts: updatedContacts
      })
    })
  }

  addContact = (contact) => {
    this.setState({
      contacts: [...this.state.contacts, contact]
    })
  }

  markAsImportant = (id) => {
    const updatedContacts= this.state.contacts.map(c => {
      if (c.id === id) {
        return {
          ...c,
          isImportant: !c.isImportant
        }
      } else {
        return c
      }
    })

    this.setState({
      contacts: updatedContacts
    })

  }
  
  deleteContact = (id) => {
    const updatedContacts = this.state.contacts.filter(contactObj => {
      return contactObj.id !== id
    })

    this.setState({
      contacts: updatedContacts
    })
  }

  showImportant = () => {
    this.setState({
      showImportant: !this.state.showImportant
    })
  }

  filterContacts = () => {
    return this.state.showImportant ? this.state.contacts.filter(c => c.isImportant) : this.state.contacts
  }


 render(){
   const contactsToShow = this.filterContacts()

   return (
    <div className="App">
      <header className="App-header">
       <FormContainer addContact={this.addContact} />
       <Filter showImportant={this.showImportant} />
       <ContactsContainer 
         contacts={contactsToShow} 
         markAsImportant={this.markAsImportant}
         deleteContact={this.deleteContact}/>
      </header>
    </div>
   )
 }
}

export default App
