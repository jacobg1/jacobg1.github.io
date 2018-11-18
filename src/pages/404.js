import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import { breakpoints } from '../components/breakpoints'
import { Link } from 'gatsby'

const ContentCard = styled.div`
  padding: 15px;
  width: 91%;
  margin: 125px auto 104px auto;
  background: #f1f1f1;
  border-radius: 5px;
  max-width: 400px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

  @media ${breakpoints.tablet} {            
    max-width: 613px;
    padding: 25px;
    text-align: center;
  }

  @media ${breakpoints.laptop} {
    max-width: 700px;
  }

  & h2, p {
    color: #0c1d96;
  }
  & a {
    color: #ef6061;
    text-decoration: none;
    transition: color .3s ease-in-out;
    :hover {
      color: #0c1d96;
    }
  }
`


const NotFoundPage = () => (
  <Layout>
    <ContentCard>
      <h2>Page not found</h2>
      <p>You just hit a route that doesn&#39;t exist... </p>
      <p>Back to <Link to="/">homepage</Link></p>
    </ContentCard>
  </Layout>
)

export default NotFoundPage
