import React from 'react'
import { Message, Button, Checkbox, Form } from 'semantic-ui-react'
import './index.css'
import isEmail from 'isemail'


class ContactForm extends React.Component {
  constructor(){
    super()
    this.state = {
      name: '',
      email: '',
      number: '',
      linkedIn: '',
      validations: {
        email: null,
      }
    }
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

 handleSubmit = (e) => {
   e.preventDefault()
   if (!isEmail.validate(this.state.email)) {
     this.setState({
       validations: {
         ...this.state.validations,
         email: 'email must be valid.'
       }
     })

     return
   }

   const reqObj = {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body:  JSON.stringify(this.state)
   }

   fetch('http://localhost:3000/contacts', reqObj)
   .then(resp => resp.json())
   .then(newContact => {
     this.props.addContact(newContact)
     this.setState({
      name: '',
      email: '',
      number: '',
      linkedIn: '',
     })

   })
 }

 render(){
   const { name, email, number, linkedIn } = this.state

   return (
     <Form inverted className='contact-form' onSubmit={this.handleSubmit}>
       <Form.Field>
         <label>Name</label>
         <input 
           placeholder='name' 
           type='text' 
           onChange={this.handleInputChange}
           value={name}
           name='name' />
       </Form.Field>
     <Form.Group widths="equal">
       <Form.Field>
         <label>Email</label>
         <Form.Input 
           error={this.state.validations['email']}
           placeholder='email' 
           type='text' 
           onChange={this.handleInputChange}
           value={email}
           name='email' />
       </Form.Field>
       <Form.Field>
         <label>Number</label>
         <input 
           placeholder='number' 
           type='text' 
           onChange={this.handleInputChange}
           value={number}
           name='number' />
       </Form.Field>
     </Form.Group >
       <Form.Field>
         <label>LinkedIn Url</label>
         <input 
           placeholder='linkedin' 
           type='text' 
           onChange={this.handleInputChange}
           value={linkedIn}
           name='linkedIn' />
       </Form.Field>
       <Button type='submit'>Submit</Button>
     </Form>
   )
 }
}

export default ContactForm


