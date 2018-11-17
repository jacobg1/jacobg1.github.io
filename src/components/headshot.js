import React from 'react'
// import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { breakpoints } from './breakpoints';

const StyledHeadshot = styled(props => <Img {...props} />)`
    &[style] {
      position: absolute !important;
    }
    width: 170px;

    position: absolute;
    border-radius: 49%;
    top: 45px;
    left: 8%;
    display: none;

    ${'' /* @media ${breakpoints.tablet} {
      display: inline-block;
    } */}
    
    

    @media ${breakpoints.laptop} {
      display: inline-block;
      top: 50px;
      left: 10%;
      width: 185px;
    }

    @media ${breakpoints.desktop} {
      left: 15%;
      top: 40px;
      width: 211px;
    }
`

const Headshot = () => (
  <StaticQuery
    query={graphql`
      query {
        headshotImage: file(relativePath: { regex: "/headshot/" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <StyledHeadshot fluid={data.headshotImage.childImageSharp.fluid} />}
  />
)
export default Headshot

