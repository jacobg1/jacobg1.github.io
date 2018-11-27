import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { breakpoints } from './breakpoints'

const FooterContainer = styled.div`
    width: 100%;
    background: #ef6060;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    padding: 25px 40px;
    position: absolute;
    bottom: 0;

    @media ${breakpoints.footer} {
        justify-content: space-between;
        flex-direction: row;
    }

    & a {
      color: white;
      text-decoration: none;
      display: block;
      text-align: center;
	  font-weight: normal;
      transition: color .3s ease-in-out;
      :hover {
          color: rgb(26, 17, 72);
      }
      @media ${breakpoints.footer} {
        display: inline-block;
      }
    }
`

const ResumeLink = styled.a `
  padding-bottom: 15px;
  padding-top: 15px;

  @media ${breakpoints.footer} {
    padding-right: 25px;
  }
`	
const ContactLink = styled(Link) `
    padding-bottom: 15px;

    @media ${breakpoints.footer} {
    padding-right: 24px;
  }
`

const Footer = ({ email }) => (
    <FooterContainer>

        <div>
            <a href={ "mailto:" + email }>{ email }</a>
        </div>

        <div>
            <ResumeLink href="/resume/">Resume</ResumeLink>
            <ContactLink to="/contact/">Contact</ContactLink>
            <Link to="/icon-credits/">Icons</Link>
        </div>

    </FooterContainer>
)

Footer.propTypes = {
    email: PropTypes.string.isRequired
}

export default Footer

