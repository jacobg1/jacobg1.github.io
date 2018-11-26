import React, { Component } from 'react'
import styled from 'styled-components'
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
        font-family: 'Roboto-bold', sans-serif;
        font-weight: normal;
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
        font-family: 'Roboto-bold', sans-serif;
        font-weight: normal;
        border: 2px solid #ffffff;
        line-height: 35px;
        padding: 0 25px;
        margin-top: 6px;
        background: #ef6060;
        color: white;
        cursor: pointer;
        text-shadow: 0 1px 1px rgb(106,80,91);
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        transition: all .3s ease-in-out;
        :hover {
            background: #73b2fb;
            color: #ffffff;
            box-shadow: none;
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
        color: #f1f1f1;
        font-size: 25px;
        margin: 109px 0;
        font-weight: 600;
        text-shadow: 0 1px 1px rgb(106,80,91);
    }

    ${({ submitted }) => submitted && `
        display: block;
    `}

    ${({ error }) => error && `
        display: none;
    `}
`
const LoadingSpinner = styled.img `
    display: none;
    
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
        margin: 109px 0;
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
        font-size: 19px;
        color: #ef6060;
        font-weight: 600;
        font-family: 'Roboto-bold', sans-serif;
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
            axios.post('https://express-nasa-search.herokuapp.com/email', {

                senderEmail: this.state.email,
                senderName: this.state.name,
                senderMessage: this.state.message
            })
            .then((response) => {

                if(response.status === 200) {
                    this.setState({
                        loading: false,
                        submitted: true,
                        emailError: false
                    })

                }
            })
            .catch((error) => {
                // eslint-disable-next-line no-console
                console.log(error)
                this.setState({
                    emailError: true,
                    loading: false
                })
            })
        }
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
                  emailError={ this.state.emailError }
              >
                <p>Trouble communicating with the server, please try again</p>
              </EmailErrorMessage>

              <MyForm 
                  onSubmit={ this.handleSubmit }
                  submitted={ this.state.submitted }
              >
                
                <input 
                    className={ this.state.noName ? 'error' : '' }
                    type="text" 
                    name="name"
                    placeholder="Name"
                    value={ this.state.name} 
                    onChange={ this.handleChange } />
              
                <input 
                    className={ this.state.noEmail ? 'error' : '' }
                    type="text"
                    name="email"
                    placeholder="Email address"
                    value={ this.state.email } 
                    onChange={ this.handleChange } />
                   
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