import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import Footer from './footer'
import './layout.css'
import styled from 'styled-components'
import { breakpoints } from '../components/breakpoints'

const SiteContainer = styled.div `
    margin: 0 auto 62px auto;
    padding-top: 0;
    padding-bottom: 105px;
    @media ${breakpoints.tablet} {
      padding-bottom: 65px;
    }
`
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            email
          }
        }
      }
    `}
    render={data => (
      <React.Fragment> 
        <Helmet
          title={ data.site.siteMetadata.title }
          meta={[
            { name: 'description', content: 'A creative thinker who uses ingenuity to find innovative solutions to challenging problems. I use insight, imagination and coding fundamentals to create success by drawing on my dedication, persistence and passion for web development'},
            { name: 'keywords', content: 'Jacob Greenwald, Portfolio, Web Developer, Javascript' },
          ]}
        >
        
        <html lang="en" />
        
        </Helmet>

        <Header 
          siteTitle={ data.site.siteMetadata.title } 
        />

        <SiteContainer>{ children }</SiteContainer>

        <Footer email={ data.site.siteMetadata.email } />

      </React.Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

