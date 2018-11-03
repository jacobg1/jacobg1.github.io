import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const StyledHeroImage = styled(props => <Img {...props} />) `
    &[style] {
      position: absolute !important;
    }
    left: 0;
    top: 0;
    width: 100%;
    height: 246px;
    z-index: -1;
`   

const HeroImage = ({ data }) => (
    <StyledHeroImage sizes={data.backgroundImage.childImageSharp.sizes} />
)


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