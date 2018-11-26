import React from 'react';
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'
import { Link } from 'gatsby';
import githubLogo from '../images/github-brands.svg'
import rocketLogo from '../images/rocket-solid.svg'
import Img from 'gatsby-image';
import { breakpoints } from '../components/breakpoints'

const ProjectCard = styled.div`
  background: #4065b7;
  border: 2px solid #ef6061;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  margin: 0 auto 20px auto;
  width: 90%;
  max-width: 833px;

  && a {
    text-decoration: none;
    color: #f16b6d;
    transition: color .3s ease-in-out;
    :hover {
      color: #ffffff;
    }
  }

  @media ${breakpoints.tablet} {
    width: 90%;
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
  line-height: 37px;
  text-align: center;
  position: relative;
  background: #ef6c6f;
  border-radius: 30px;
  border: 2px solid #f3f3f3;
  transition: all .3s ease-in-out;

  :hover {
    @media ${breakpoints.tablet} {
      opacity: .7;
      box-shadow: none;
      text-shadow: 0 1px 1px rgb(41,35,37);
      background: #8cc3f9;
    }
  }
   
  & a {
    text-decoration: none; 
    width: 100%;
    display: inline-block;
    padding-left: 5px;
    font-size: 15px;
    font-weight: bold;
    height: 100%;
    color: white;

    @media ${breakpoints.mobile} {
      font-size: 17px;
    }

    @media ${breakpoints.desktop} {
      max-width: 275px;
      font-size: 19px;
    }
  }

  && img{
    width: 20px;
    margin: 0;
    position: absolute;
    left: 10px;
    top: 8px;
    
    @media ${breakpoints.desktop} {
      width: 24px;
      top: 8px;
    }
  }
`

const ProjectTitle = styled.h2 `
  color: white;
  text-align: center;
  text-shadow: 0 1px 1px rgb(106,80,91);
  font-size: 35px;
  margin: 55px 0 15px 0;
  display: inline-block;

  @media ${breakpoints.laptop} {
    font-size: 40px;
    margin: 50px 0 30px 0;
  }

  @media ${breakpoints.desktop} {
    font-size: 45px;
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
    color: #f1f1f1;

    @media ${breakpoints.mobile} {
      font-size: 17px;
      line-height: 25px;
    }
    @media ${breakpoints.laptop} {
      font-size: 19px;
      line-height: 30px;
    }
    @media ${breakpoints.desktop} {
      font-size: 20px;
      line-height: 31px;
    }
  } 
  
`
const ProjectLink = styled(Link)`
  color: #f3f3f3;
  font-weight: bold;
  text-decoration: none;
  font-size: 15px;
  border-bottom: 4px solid;
  padding: 0 2px 4px 2px;
  letter-spacing: .4px;
  transition: color .3s ease-in-out;

  :hover {
    color: #1a1148;
  }

  @media ${breakpoints.mobile} {  
    font-size: 16px;
  }

  @media ${breakpoints.laptop} {
    font-size: 18px;
  }

  @media ${breakpoints.desktop} {
    font-size: 22px;
  }
`

const ProjectIcon = styled(Img)`
  vertical-align: sub;
  margin-left: 17px;
`

const NavFlex = styled(FlexContainer) `
  max-width: 450px;
  margin-top: 20px;
  margin-bottom: 35px;
  width: 93%;

  @media ${breakpoints.desktop} {
    max-width: 525px
  }
`

const ButtonFlex = styled(FlexContainer) `
  margin-bottom: 25px;
  max-width: 550px;

  @media ${breakpoints.laptop} {
    max-width: 656px;
  }
  @media ${breakpoints.desktop} {
    margin-bottom: 40px;
    margin-top: 46px;
  }
`
export default function Template({ data }) {

  const project = data.markdownRemark
  
  return (
    <Layout>

      <div style={{textAlign: "center"}}>
        <ProjectTitle>{project.frontmatter.title}</ProjectTitle>
        <ProjectIcon fixed={project.frontmatter.cover_image.childImageSharp.fixed} />
      </div>

      <NavFlex>
        <ProjectLink to="/space-search/" activeStyle={{ color: "#1a1148" }}>Space Search</ProjectLink>
        <ProjectLink to="/crunchfm/" activeStyle={{ color: "#1a1148" }}>CRUNCHfm</ProjectLink>
        <ProjectLink to="/simon-game/" activeStyle={{ color: "#1a1148" }}>Simon Game</ProjectLink>
      </NavFlex>

      <ButtonFlex>
        <LinkHolder>   
          <a href={project.frontmatter.githubLink} rel="noopener noreferrer" target="_blank">
          <img src={githubLogo} alt="github logo"></img>
            Repo
          </a>
        </LinkHolder>
        <LinkHolder>
          <a href={project.frontmatter.projectLink} rel="noopener noreferrer" target="_blank">
          <img src={rocketLogo} alt="rocket logo"></img>
            App
          </a>
        </LinkHolder>
      </ButtonFlex>
      <ProjectCard>
        <ProjectHolder>

        <div
          className="project-content"
          dangerouslySetInnerHTML={{ __html: project.html }}
        />

        </ProjectHolder>
      </ProjectCard>
    </Layout>
  );
}

Template.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.isRequired,
      frontmatter: PropTypes.shape({
        path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        githubLink: PropTypes.string.isRequired,
        projectLink: PropTypes.string.isRequired,
        cover_image: PropTypes.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
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
