import React from "react";
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'
import { Link } from "gatsby";
import githubLogo from '../images/github-brands.svg'
import rocketLogo from '../images/rocket-solid.svg'
import Img from "gatsby-image";

const ProjectCard = styled.div`
   background: #f1f1f1;
    border-radius: 5px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    max-width: 295px;
    margin: 0 auto 20px auto;
    && a {
      text-decoration: none;
    }
`
const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 295px;
      margin: 20px auto 5px auto;
`
const LinkHolder = styled.div `
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  background: #f1f1f1;
  margin-bottom: 20px;
  width: 45%;
  height: 40px;
  text-align: center;
  position: relative;
      background: #73b2fb;
      border-radius: 30px;

    && a {
      text-decoration: none; 
      width: 100%;
      display: inline-block;
      padding-left: 5px;
          font-size: 15px;
    font-weight: bold;
    height: 100%;
    padding-top: 10px;
    color: white;
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
  font-size: 28px;
          margin: 40px 0 15px 0;
`
const ProjectHolder = styled.div `
  padding: 10px;
  overflow: auto;
  && p {
    line-height: 23px;
    margin: 0;
  } 
`
const ProjectLink = styled(Link)`
  color: #73b2fb;
  font-weight: bold;
  text-decoration: none;
      font-size: 14px;
    border-bottom: 4px solid;
    padding: 0 2px 4px 2px;
`
const ProjectIcon = styled(Img)`
  float: right;
`
export default function Template({ data }) {
  const project = data.markdownRemark
  return (
    <Layout>
      <ProjectTitle>{project.frontmatter.title}</ProjectTitle>
      <FlexContainer>
        <ProjectLink to="/project-one/" activeStyle={{color: "black"}}>Space Search</ProjectLink>
        <ProjectLink to="/project-two/" activeStyle={{ color: "black" }}>CRUNCHfm</ProjectLink>
        <ProjectLink to="/project-three/" activeStyle={{ color: "black" }}>Simon Says</ProjectLink>

      </FlexContainer>
      <FlexContainer>
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
      </FlexContainer>
      <ProjectCard>
        <ProjectHolder>

        <div
          className="project-content"
          dangerouslySetInnerHTML={{ __html: project.html }}
        />
          <ProjectIcon fixed={project.frontmatter.cover_image.childImageSharp.fixed} />

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
              ...GatsbyImageSharpFixed
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