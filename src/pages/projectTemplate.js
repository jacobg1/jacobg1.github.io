import React from 'react';
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'
import { Link } from 'gatsby';
import githubLogo from '../images/github-brands.svg'
import rocketLogo from '../images/rocket-solid.svg'
import Img from 'gatsby-image';
import { breakpoints } from '../components/breakpoints'

const ProjectCard = styled.div`
  background: #f1f1f1;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  margin: 0 auto 20px auto;
  width: 70%;
  max-width: 833px;
  && a {
    text-decoration: none;
    color: #70b0fe;
    font-weight: bold;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 90%;
  margin: 20px auto 5px auto;
`
const LinkHolder = styled.div `
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  margin-bottom: 20px;
  width: 45%;
  height: 40px;
  text-align: center;
  position: relative;
  background: #73b2fb;
  border-radius: 30px;
  transition: all .3s ease-in-out;
  :hover {
    opacity: .7;
    box-shadow: none;
  }
   
  & a {
    text-decoration: none; 
    width: 100%;
    display: inline-block;
    padding-left: 5px;
    font-size: 15px;
    font-weight: bold;
    height: 100%;
    padding-top: 10px;
    color: white;

    @media ${breakpoints.mobile} {
      font-size: 17px;
    }

    @media ${breakpoints.desktop} {
      max-width: 275px;
    }
  }
  && img{
    width: 20px;
    margin: 0;
    position: absolute;
    left: 10px;
    top: 10px;
  }
`

const ProjectTitle = styled.h2 `
  color: white;
  text-align: center;
  text-shadow: 0 1px 1px rgb(106,80,91);
  font-size: 35px;
  margin: 40px 0 15px 0;

  @media ${breakpoints.laptop} {
    font-size: 40px;
    margin: 50px 0 45px 0;
  }
  
`
const ProjectHolder = styled.div `
  padding: 10px;
  overflow: auto;

  @media ${breakpoints.mobile} {
    padding: 20px 20px 15px 20px;
  }
  && p {
    line-height: 23px;
    margin: 0;
    font-size: 16px;
    color: #0c1d96;

    @media ${breakpoints.mobile} {
      font-size: 17px;
      line-height: 25px;
    }

    @media ${breakpoints.laptop} {
      font-size: 19px;
      line-height: 30px;
    }
  } 
  
`
const ProjectLink = styled(Link)`
  color: #73b2fb;
  font-weight: bold;
  text-decoration: none;
  font-size: 14px;
  border-bottom: 4px solid;
  padding: 0 2px 4px 2px;
  transition: color .3s ease-in-out;
  :hover {
    color: #000000;
  }

  @media ${breakpoints.mobile} {  
    font-size: 16px;
  }

  @media ${breakpoints.laptop} {
    font-size: 18px;
  }
`
const ProjectIcon = styled(Img)`
  float: right;
`

const TopIconFlex = styled(FlexContainer) `
  margin-top:0;
  margin-bottom: 20px;
`

const BottmomIconFlex = styled(FlexContainer)`
  margin-top: 15px;
  margin-bottom: 10px;
  justify-content: center;
`

const NavFlex = styled(FlexContainer) `
  max-width: 450px;
  margin-top: 33px;
  margin-bottom: 35px;
`

const ButtonFlex = styled(FlexContainer) `
  margin-bottom: 25px;
  max-width: 550px;

  @media ${breakpoints.laptop} {
    max-width: 656px;
  }
`
export default function Template({ data }) {
  const project = data.markdownRemark
  return (
    <Layout>
      <ProjectTitle>{project.frontmatter.title}</ProjectTitle>

      <NavFlex>
        <ProjectLink to="/space-search/" activeStyle={{color: "black"}}>Space Search</ProjectLink>
        <ProjectLink to="/crunchfm/" activeStyle={{ color: "black" }}>CRUNCHfm</ProjectLink>
        <ProjectLink to="/simon-says/" activeStyle={{ color: "black" }}>Simon Says</ProjectLink>
      </NavFlex>

      <ButtonFlex>
        <LinkHolder>   
          <a href={project.frontmatter.githubLink} target="_blank">
          <img src={githubLogo} alt="github logo"></img>
            Repo
          </a>
        </LinkHolder>
        <LinkHolder>
          <a href={project.frontmatter.projectLink} target="_blank">
          <img src={rocketLogo} alt="rocket logo"></img>
            App
          </a>
        </LinkHolder>
      </ButtonFlex>
      <ProjectCard>
        <ProjectHolder>
          {/* <TopIconFlex>
            <ProjectIcon fixed={project.frontmatter.cover_image.childImageSharp.fixed} />

          <ProjectIcon fixed={project.frontmatter.cover_image.childImageSharp.fixed} />
          <ProjectIcon fixed={project.frontmatter.cover_image.childImageSharp.fixed} />
          <ProjectIcon fixed={project.frontmatter.cover_image.childImageSharp.fixed} />
          <ProjectIcon fixed={project.frontmatter.cover_image.childImageSharp.fixed} />
          </TopIconFlex> */}
        <div
          className="project-content"
          dangerouslySetInnerHTML={{ __html: project.html }}
        />
          <BottmomIconFlex>
            <ProjectIcon fixed={project.frontmatter.cover_image.childImageSharp.fixed} />
          
            {/* <ProjectIcon fixed={project.frontmatter.cover_image.childImageSharp.fixed} /> */}
            {/* <ProjectIcon fixed={project.frontmatter.cover_image.childImageSharp.fixed} /> */}
            {/* <ProjectIcon fixed={project.frontmatter.cover_image.childImageSharp.fixed} /> */}
            {/* <ProjectIcon fixed={project.frontmatter.cover_image.childImageSharp.fixed} /> */}
          </BottmomIconFlex>
        </ProjectHolder>
      </ProjectCard>
    </Layout>
  );
}
export const pageQuery = graphql`
  query ProjectByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        githubLink
        projectLink
        cover_image {
          childImageSharp {
            fixed(width: 30, height: 30) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    }
  }
`

// placeholderImage: file(relativePath: { regex: "/github/" }) {
//   childImageSharp {
//     fixed(width: 125, height: 125) {
//               ...GatsbyImageSharpFixed
//     }
//   }
// }