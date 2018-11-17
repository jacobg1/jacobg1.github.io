import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { breakpoints } from './breakpoints'

const FooterContainer = styled.div`
    width: 100%;
    height: 100%;
    background: #ef6060;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    padding: 25px 40px;
    @media ${breakpoints.footer} {
        justify-content: space-between;
        flex-direction: row;
    }
    & a {
      color: white;
      text-decoration: none;
      display: block;
      text-align: center;
			font-weight: 600;
            transition: color .3s ease-in-out;
            :hover {
                color: #000;
            }
      @media ${breakpoints.footer} {
        display: inline-block;
      }
    }
`

const ResumeLink = styled(Link) `
  padding-bottom: 15px;
  padding-top: 15px;
  @media ${breakpoints.footer} {
    padding-right: 25px;
  }
`	
const ContactLink = styled(Link) `
    padding-bottom: 15px;
    @media ${breakpoints.footer} {
    padding-right: 25px;
  }
`

const Footer = ({ email }) => (
    <FooterContainer>
        <div>
            <a href={"mailto:" + email}>{email}</a>
        </div>
        <div>
            <ResumeLink to="#">Resume</ResumeLink>
            <ContactLink to="/contact/">Contact</ContactLink>
            <Link to="/icon-credits/">Icon Credit</Link>

        </div>
    </FooterContainer>
)

Footer.propTypes = {
    email: PropTypes.string.isRequired
}

export default Footer

