import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import ContactForm from '../components/contactForm'
import styled from 'styled-components'
import { breakpoints } from '../components/breakpoints';

const ContentCard = styled.div`
  padding: 15px;
  width: 91%;
  margin: 60px auto 43px auto;
  background: #f1f1f1;
  border-radius: 5px;
  text-align: center;
  max-width: 400px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

  ${'' /* @media ${breakpoints.tablet} {            
    padding: 25px;
    
  } */}

  @media ${breakpoints.laptop} {
    max-width: 700px;
    margin-top: 95px;
  }
`

export default function ContactPage ({ data })  {

    const email = data.site.siteMetadata.email

        return (
            <Layout>
                <ContentCard>
                    <p>Email me at: </p><a href={"mailto:" + email}>{email}</a>
                    <p>Or submit the form below:</p>
                </ContentCard>
                <ContactForm />
            </Layout>
        )
}

ContactPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        email: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
}

// export default ContactPage

export const pageQuery = graphql`
  query EmailQuery {
    site {
      siteMetadata {
        email
      }
    }
  }
`