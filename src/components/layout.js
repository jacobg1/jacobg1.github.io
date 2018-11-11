import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import Footer from './footer'
import './layout.css'
import styled from 'styled-components'

const SiteContainer = styled.div `
    margin: 0 auto;
    padding-top: 0;
    padding-bottom: 40px;
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
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'A creative thinker who uses ingenuity to find innovative solutions to challenging problems. I use insight, imagination and coding fundamentals to create success by drawing on my dedication, persistence and passion for web development', content: 'Sample' },
            { name: 'keywords', content: 'Jacob Greenwald, Web Developer, Javascript' },
          ]}
        >
          <html lang="en" />
        </Helmet>

        <Header siteTitle={data.site.siteMetadata.title} />

        <SiteContainer>{children}</SiteContainer>
        <Footer email={data.site.siteMetadata.email} />
      </React.Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

