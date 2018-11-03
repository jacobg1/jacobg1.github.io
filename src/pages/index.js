import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'

const BodyContainer = styled.div `
    
     max-width: 300px;
     margin-bottom: 1.45rem;
`
const StyledLink = styled(Link) `
  color: #ffffff;
`
const IndexPage = () => (
  <Layout>
    
    <BodyContainer>
      <h1>Jacob Greenwald</h1>
      <p>A creative thinker who uses ingenuity to find innovative solutions to challenging problems. I use insight, imagination and coding fundamentals to create success by drawing on my dedication, persistence and passion for web development</p>
      <p>Now go build something great.</p>
      <StyledLink to="/project-one/">Projects</StyledLink>
    </BodyContainer>
  </Layout>
)

export default IndexPage


export const pageQuery = graphql`
  query {
    backgroundImage: file(relativePath: { regex:"/pineapple/" }) {
       childImageSharp {
        sizes(maxWidth: 1500) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`