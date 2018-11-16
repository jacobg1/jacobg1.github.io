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
    text-align: left;
    width: 90%;
    max-width: 400px;

    & input, textarea {
        font-weight: 600;
        display: block;
        margin: 15px auto;
        width: 100%;
        padding: 10px;
        background: #f1f1f1;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        border: none;
        color: #20224b;
        border-radius: 5px;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        :focus {
          outline-color: #73b2fb;
        }
    }
    & textarea {
        height: 90px;
    }
    & button {
        font-weight: 600;
        border-radius: 5px;
        letter-spacing: .3px;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        border: 2px solid #73b2fb;
        /* padding: 26px; */
        line-height: 35px;
        padding: 0 25px;
        margin-top: 6px;
        background: #73b2fb;
        color: white;
        cursor: pointer;
        text-shadow: 0 1px 1px rgb(106,80,91);
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        transition: all .3s ease-in-out;
        :hover {
            background: #f1f1f1;
            color: #73b2fb;
            text-shadow: none;
        }
        :focus {
            outline: none;
        }
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
    display: none;
    text-align: center;
    & p {
        color: #70affe;
        font-size: 25px;
        margin: 109px 0;
        font-weight: 600;
    }

    ${({ submitted }) => submitted && `
        display: block;
    `}

    ${({error}) => error && `
        display: none;
    `}

   
`
const LoadingSpinner = styled.img `
    display: none;
    ${'' /* margin: 0 auto; */}
    
    ${({ loading }) => loading && `
        display: block;
    `}
`
const EmailErrorMessage = styled.div`
    display: none;
    text-align: center;
    & p {
         color: #ef6060;
        font-size: 25px;
        margin: 40px 0;
        font-weight: 600;
    }
    ${({ emailError }) => emailError && `
        display: block
    `}
`
const FormErrorHolder = styled.div`
    width: 90%;
    margin: 0 auto 25px auto;
    max-width: 400px;

    & ul {
        margin-bottom: 0;
    }
    & li {
        margin-bottom: 4px;
        color: #ef6060;
        font-weight: 600;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }
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

              <FormErrorHolder>
                <ul>
                  {
                  formErrors.map(( error, index) => (
                      <li key={ index }>{ error.text }</li>
                  ))
                  }
                </ul>
              </FormErrorHolder>

              <EmailErrorMessage
                  emailError={this.state.emailError}
              >
                <p>Trouble communicating with the server, please try again</p>
              </EmailErrorMessage>

              <MyForm 
                  onSubmit={ this.handleSubmit }
                  submitted={ this.state.submitted }
              >
                
                {/* <label>Name:</label> */}
                <input 
                    className={ this.state.noName ? 'error' : '' }
                    type="text" 
                    name="name"
                    placeholder="Name"
                    value={ this.state.name} 
                    onChange={ this.handleChange } />
                {/* {
                  this.state.formErrors.noName
                  ? <p>please enter name</p>
                  : ''  
                } */}
                {/* <label>Email:</label> */}
                <input 
                    className={ this.state.noEmail ? 'error' : '' }
                    type="text"
                    name="email"
                    placeholder="Email address"
                    value={ this.state.email } 
                    onChange={ this.handleChange } />
                    {/* {
                      this.state.formErrors.noEmail
                      ? <p>please enter email</p>
                      : ''
                    } */}
                {/* <label>Message:</label> */}
                <textarea
                    className={ this.state.noMessage ? 'error' : ''}
                    placeholder="Message"
                    name="message"
                    value={ this.state.message }
                    onChange={ this.handleChange }
                ></textarea>

                <button 
                    type="submit"
                    className={ this.state.loading ? 'loading' : ''}
                >Submit</button>
                    
              </MyForm>
                <div style={{maxWidth: 457, margin: '0 auto'}}>
                    <LoadingSpinner src={ loader }
                        loading={ this.state.loading }
                    />
                </div>
                <SuccessMessage
                    submitted={ this.state.submitted }
                    error={ this.state.emailError }
                >
                    <p>Thank you for contacting me, I&apos;ll be in touch shortly!</p>
                </SuccessMessage>

                
            </React.Fragment>
        )
    }
    
}

export default ContactForm