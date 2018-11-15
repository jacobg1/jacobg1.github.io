/* eslint-disable no-console */
import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import { Link } from 'gatsby'
import styled from 'styled-components'
// import { breakpoints } from './breakpoints'
import axios from 'axios'
import loader from '../images/Ripple.svg'

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
    ${({ submitted }) => submitted && `
        display: none;
    `}

    & button.loading {
        display: none;
    }
`

const SuccessMessage = styled.div`
    background-color: blue;
    color: white;
    display: none;
    
    ${({ submitted }) => submitted && `
        display: block;
    `}

    ${({ loading }) => loading && `
        background: red;
    `}
`
const LoadingSpinner = styled.img `
    display: none;
    margin: 0 auto;
    ${({ loading }) => loading && `
        display: block;
    `}
`
const EmailErrorMessage = styled.div`
    display: none;
    background-color: red;
    color: white;

    ${({ emailError }) => emailError && `
        display: block
    `}
`
class ContactForm extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            submitted: false,
            emailError: false,
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
            this.setState({ 
                formErrors,
                loading: true  
            })
            axios.post('http://localhost:3000/email', {

                senderEmail: this.state.email,
                senderName: this.state.name,
                senderMessage: this.state.message
            })
            .then((response) => {
                console.log(response.statusText)

                if(response.status === 200) {
                    console.log('OK', response)
                    this.setState({
                        loading: false,
                        submitted: true,
                        emailError: false
                    })

                }
            })
            .catch((error) => {
                console.log('here', error)
                this.setState({
                    emailError: true,
                    loading: false
                })
            })
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
              <MyForm 
                  onSubmit={ this.handleSubmit }
                  submitted={this.state.submitted}
                  >
                
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
                    type="email"
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

                <button 
                    type="submit"
                    className={ this.state.loading ? 'loading' : ''}
                >submit</button>
                    
              </MyForm>

                <LoadingSpinner src={ loader }
                    loading={ this.state.loading }
                />
                
                <SuccessMessage
                    submitted={ this.state.submitted }
                    loading={ this.state.loading }
                >
                    <p>Thank you for contacting me, I&#44;ll be in touch shortly!</p>
                </SuccessMessage>

                <EmailErrorMessage
                    emailError={ this.state.emailError }
                >
                    <p>Trouble communicating with the server, please try again</p>
                </EmailErrorMessage>
            </React.Fragment>
        )
    }
    
}

export default ContactForm