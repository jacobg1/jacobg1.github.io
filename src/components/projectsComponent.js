import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import { Link } from 'gatsby'
import styled from 'styled-components'
import { breakpoints } from './breakpoints'
// import Img from 'gatsby-image';
import SpaceText from './spaceText'
import ProjectOne from './ProjectOne'
import SimonText from './simonText'
import spaceImage from '../images/space.png'
// import crunchImage from '../images/turntable.png'
// import simonImage from '../images/simon.png'
import ProjectLinks from './projectLinks'

const NavFlex = styled.div`
  max-width: 525px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  margin: 20px auto 5px auto;

  & p.space-active {
    color: #1a1148;
  }

  & p.crunch-active {
    color: #1a1148;
  }

  & p.simon-active {
    color: #1a1148;
  }

  @media ${breakpoints.desktop} {
    max-width: 525px;
  }
`
const ProjectSwitch = styled.p`
  color: #f3f3f3;
  /* font-weight: bold; */
  text-decoration: none;
  font-family: 'Roboto-bold', sans-serif;
  font-size: 15px;
  border-bottom: 4px solid;
  padding: 0 2px 4px 2px;
  letter-spacing: 0.4px;
  transition: color 0.3s ease-in-out;
  cursor: pointer;
  margin-bottom: 15px;

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

const ProjectTitle = styled.h2`
  color: white;
  text-align: center;
  text-shadow: 0 1px 1px rgb(106, 80, 91);
  font-size: 35px;
  margin: 115px 0 15px 0;
  display: inline-block;

  @media ${breakpoints.laptop} {
    font-size: 40px;
    ${'' /* margin: 50px 0 30px 0; */}
  }

  @media ${breakpoints.desktop} {
    font-size: 45px;
  }
`

const ProjectIcon = styled.div`
  display: inline-block;
  display: none;
  & img {
    vertical-align: sub;
    position: relative;
    overflow: hidden;

    width: 30px;
    height: 30px;
    margin-bottom: 0;
    margin-left: 17px;
  }
`
const ProjectCard = styled.div`
  background: #4065b7;
  border: 2px solid #e7e9ef;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin: 0 auto 20px auto;
  width: 90%;
  max-width: 870px;

  && a {
    text-decoration: none;
    color: #f16b6d;
    transition: color 0.3s ease-in-out;
    :hover {
      color: #ffffff;
    }
  }

  @media ${breakpoints.tablet} {
    width: 90%;
  }
`

// var projects = [

//     { title: 'Space Search' },
//     { title: 'CRUNCHfm' },
//     { title: 'Simon Game'}
// ]

class ProjectsComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      spaceActive: true,
      crunchActive: false,
      simonActive: false,
    }
    this.showSpace = this.showSpace.bind(this)
    this.showCrunch = this.showCrunch.bind(this)
    this.showSimon = this.showSimon.bind(this)
  }
  showSpace() {
    this.setState({
      spaceActive: true,
      crunchActive: false,
      simonActive: false,
    })
  }
  showCrunch() {
    this.setState({
      spaceActive: false,
      crunchActive: true,
      simonActive: false,
    })
  }
  showSimon() {
    this.setState({
      spaceActive: false,
      crunchActive: false,
      simonActive: true,
    })
  }
  render() {
    const projectTitle = (
      <React.Fragment>
        <ProjectTitle>
          {this.state.spaceActive
            ? 'Stock Viz'
            : this.state.crunchActive
            ? 'Concert Search'
            : this.state.simonActive
            ? 'Space Search'
            : ''}
        </ProjectTitle>
        <ProjectIcon>
          <img alt="project-icon" src={spaceImage} />
        </ProjectIcon>
      </React.Fragment>
    )

    const projectBody = (
      <ProjectCard>
        {this.state.spaceActive ? (
          <ProjectOne />
        ) : this.state.crunchActive ? (
          <SimonText />
        ) : this.state.simonActive ? (
          <SpaceText />
        ) : (
          ''
        )}
      </ProjectCard>
    )

    return (
      <React.Fragment>
        <div style={{ textAlign: 'center' }}>{projectTitle}</div>
        <NavFlex>
          <ProjectSwitch
            className={this.state.crunchActive ? 'crunch-active' : ''}
            onClick={this.showCrunch}
          >
            Concert Search
          </ProjectSwitch>
          <ProjectSwitch
            className={this.state.spaceActive ? 'space-active' : ''}
            onClick={this.showSpace}
          >
            Stock Viz
          </ProjectSwitch>
          <ProjectSwitch
            className={this.state.simonActive ? 'simon-active' : ''}
            onClick={this.showSimon}
          >
            Space Search
          </ProjectSwitch>
        </NavFlex>

        <ProjectLinks
          spaceLinks={this.state.spaceActive}
          crunchLinks={this.state.crunchActive}
          simonLinks={this.state.simonActive}
        />

        {projectBody}
      </React.Fragment>
    )
  }
}

export default ProjectsComponent
