/* eslint-disable no-console */
import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import { Link } from 'gatsby'
import styled from 'styled-components'
// import { breakpoints } from './breakpoints'

const MyForm = styled.form`
    margin: 0 auto;
    text-align: center;
    & input {
        display: block;
        margin: 0 auto;
    }
    & textarea {
        display: block;
        margin: 0 auto;
    }

    & input.error, textarea.error {
        border-color: red;
    }
`

class ContactForm extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            name: '',
            email: '',
            message: '',
            noName: false,
            noEmail: false,
            noMessage: false,
            formErrors: []
        }  
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.validateInput = this.validateInput.bind(this)
        this.clearForm = this.clearForm.bind(this)
    }
    validateInput (name, email, message) {
        
        const errorArray = []

        if (!name.length) {
            errorArray.push({ type: 'name', text: 'please enter name' })
            this.setState({ noName: true })
        }
        if(!email.length) {
            errorArray.push({ type: 'email', text: 'please enter email' })
            this.setState({ noEmail: true })
        }
        if(!message.length) {
            errorArray.push({ type:'message', text: 'please enter a message' })
            this.setState({ noMessage: true })
        }
        // eslint-disable-next-line no-console
        console.log(errorArray)
        return errorArray
       

    }
    handleChange(event) {
        const inputName = event.target.name
        const value = event.target.value
        this.setState({
            [inputName]: value
        }, function () {
            if (this.state.name) {
                this.setState({ noName: false })
            }
            if (this.state.email) {
                this.setState({ noEmail: false })
            }
            if (this.state.message) {
                this.setState({ noMessage: false })
            }
        })
    }
    handleSubmit(e) {
        e.preventDefault()
        let { name, email, message } = this.state
        
        let formErrors = this.validateInput(name, email, message)
        
        if (formErrors.length > 0) {
            this.setState({ formErrors })
            return;
        } else {
            this.setState({ formErrors })
        }
        // eslint-disable-next-line no-console
        console.log(this.state.name)
    } 
    clearForm () {
        // console.log('here here', this.state.formErrors)

        this.setState({
            name: '',
            email: '',
            message: '',
            noName: false,
            noEmail: false,
            noMessage: false,
            formErrors: [] 
        }, function () {
            console.log('here here here', this.state.formErrors)
        })
    }
    render () {
        let { formErrors } = this.state
       
        return (
            <React.Fragment>
                {
                    formErrors.map(( error, index) => (
                        <span key={ index }>{ error.text }</span>
                    ))
                }
              <MyForm onSubmit={ this.handleSubmit }>
                
                <label>Name:</label>
                <input 
                    className={ this.state.noName ? 'error' : '' }
                    type="text" 
                    name="name"
                    value={this.state.name} 
                    onChange={this.handleChange} />
                {/* {
                  this.state.formErrors.noName
                  ? <p>please enter name</p>
                  : ''  
                } */}
                <label>Email:</label>
                <input 
                    className={ this.state.noEmail ? 'error' : '' }
                    type="text"
                    name="email"
                    value={this.state.email} 
                    onChange={this.handleChange} />
                    {/* {
                      this.state.formErrors.noEmail
                      ? <p>please enter email</p>
                      : ''
                    } */}
                <label>Message:</label>
                <textarea
                    className={ this.state.noMessage ? 'error' : ''}
                    placeholder="Your Message"
                    name="message"
                    value={this.state.message}
                    onChange={this.handleChange}
                ></textarea>

                <button type="submit">submit</button>
              </MyForm>
            </React.Fragment>
        )
    }
    
}

export default ContactForm