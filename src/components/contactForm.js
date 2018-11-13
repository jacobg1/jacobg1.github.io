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
`

class ContactForm extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            name: '',
            email: '',
            message: ''
        }  
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.clearForm = this.clearForm.bind(this)
    }
    handleChange(event) {
        const inputName = event.target.name
        const value = event.target.value
        this.setState({
            [inputName]: value
        })
    }
    handleSubmit(event) {
        event.preventDefault()
        // eslint-disable-next-line no-console
        console.log(this.state.name, this.state.email, this.state.message)
    } 
    clearForm () {
        this.setState({
            name: '',
            email: '',
            message: ''
        })
    }
    render () {
        return (
            <React.Fragment>
              <MyForm onSubmit={this.handleSubmit}>

                <label>Name:</label>
                <input 
                    type="text" 
                    name="name"
                    value={this.state.name} 
                    onChange={this.handleChange} />
              
                <label>Email:</label>
                <input 
                    type="text"
                    name="email"
                    value={this.state.email} 
                    onChange={this.handleChange} />

                <label>Message:</label>
                <textarea
                    placeholder="Your Message"
                    name="message"
                    value={this.state.message}
                    onChange={this.handleChange}
                ></textarea>

                <button type="submit">submit</button>
                <button onClick={this.clearForm}>clear</button>
              </MyForm>
            </React.Fragment>
        )
    }
    
}

export default ContactForm