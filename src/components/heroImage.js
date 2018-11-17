import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { breakpoints } from './breakpoints';

const StyledHeroImage = styled(props => <Img {...props} />) `
    &[style] {
      position: absolute !important;
    }
    left: 0;
    top: 0;
    width: 100%;
    height: 260px;
    z-index: -1;

    @media ${breakpoints.laptop} {
      height: 275px;
    }
`   

const HeroImage = ({ data }) => (
    <StyledHeroImage sizes={data.backgroundImage.childImageSharp.sizes} />
)


// eslint-disable-next-line react/display-name
export default props => (
    <StaticQuery
        query={graphql`
          query {
            backgroundImage: file(relativePath: { regex: "/221435/" }) {
              childImageSharp {
                sizes(maxWidth: 1500) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        `}
         render={data => <HeroImage data={data} {...props} />}
    />
)

HeroImage.propTypes = {
  data: PropTypes.shape({
    backgroundImage: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        sizes: PropTypes.object.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
}