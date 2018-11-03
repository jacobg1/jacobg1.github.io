import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const HeroImage = ({ data }) => (
    <Img
        sizes={data.backgroundImage.childImageSharp.sizes}
        style={{
            position: "absolute",
            left: 0,
            top: 85,
            width: "100%",
            height: "30%"
        }}
    />
)



export default props => (
    <StaticQuery
        query={graphql`
          query {
            backgroundImage: file(relativePath: { regex:"/pineapple/" }) {
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