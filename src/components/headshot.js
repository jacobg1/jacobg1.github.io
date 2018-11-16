import React from 'react'
import PropTypes from 'prop-types'
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

    @media ${breakpoints.tablet} {
      display: inline-block;
    }
    
    

    @media ${breakpoints.laptop} {
      top: 50px;
      left: 10%;
      width: 185px;
    }

    @media ${breakpoints.desktop} {
      left: 15%;
    }
`

const Headshot = ({ data }) => (
    <StyledHeadshot fluid={data.backgroundImage.childImageSharp.fluid} />
)


// eslint-disable-next-line react/display-name
export default props => (
    <StaticQuery
        query={graphql`
          query {
            backgroundImage: file(relativePath: { regex: "/headshot/" }) {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => <Headshot data={data} {...props} />}
    />
)

Headshot.propTypes = {
    data: PropTypes.shape({
        backgroundImage: PropTypes.shape({
            childImageSharp: PropTypes.shape({
                fluid: PropTypes.object.isRequired
            }).isRequired
        }).isRequired
    }).isRequired
}