import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import ContactForm from '../components/contactForm'
import styled from 'styled-components'
import { breakpoints } from '../components/breakpoints';

const ContentCard = styled.div`
  padding: 5px 0;
  width: 91%;
  margin: 100px auto 43px auto;
  background: #f1f1f1;
  border-radius: 5px;
  text-align: center;
  max-width: 400px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

  ${'' /* @media ${breakpoints.tablet} {            
    padding: 25px;
    
  } */}
  & p {
    color: #20224b;
    font-weight: 600;
    margin: 0;
    font-size: 20px;
  }

  & a {
      display: inline-block;
      margin: 15px 10px;
      text-decoration: none;
      font-size: 23px;
      color: #ef6060;
      transition: color .3s ease-in-out;
      font-weight: 600;

      :hover {
        color: #73b2fb;
      }
  }

  @media ${breakpoints.laptop} {
    ${'' /* max-width: 700px; */}
    margin-top: 95px;
  }
`

export default function ContactPage ({ data })  {

    const email = data.site.siteMetadata.email

        return (
            <Layout>
                <ContentCard>
                    <p style={{ display: 'inline-block' }}> </p>
                        <a href={ 'mailto:' + email }>{ email }</a>
                    {/* <p>Or submit the form below:</p> */}
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