import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { breakpoints } from './breakpoints'
import githubLogo from '../images/github-brands.svg'
import rocketLogo from '../images/rocket-solid.svg'

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 90%;
  margin: 20px auto 5px auto;
`

const LinkHolder = styled.div`
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
    
      opacity: .7;
      box-shadow: none;
      text-shadow: 0 1px 1px rgb(41,35,37);
      background: #8cc3f9;
   
  }
   
  & a {
    text-decoration: none; 
    width: 100%;
    display: inline-block;
    padding-left: 5px;
    font-size: 15px;
    /* font-weight: bold; */
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

const ButtonFlex = styled(FlexContainer)`
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

class ProjectLinks extends Component {

    constructor(props) {
        super(props)
    }

    render () {
        return (
            <ButtonFlex>
                <LinkHolder>   
                <a 
                    rel="noopener noreferrer" 
                    target="_blank"
                    href={
                        this.props.spaceLinks ? 'https://github.com/jacobg1/SpaceSearch'
                        : this.props.crunchLinks ? 'https://github.com/jacobg1/CRUNCHfm'
                        : this.props.simonLinks ? 'https://github.com/jacobg1/Simon-Says'
                        : '#'    
                    } 
                >

                <img src={ githubLogo } alt="github logo"></img>
                    Repo
                </a>
                
                </LinkHolder>

                <LinkHolder>
                <a 
                    rel="noopener noreferrer" 
                    target="_blank"
                    href={
                        this.props.spaceLinks ? 'http://space-search.surge.sh'
                        : this.props.crunchLinks ? 'https://jacobg1.github.io/CRUNCHfm/'
                        : this.props.simonLinks ? 'https://jacobg1.github.io/Simon-Says/'
                        : '#'    
                    }  
                >

                <img src={ rocketLogo } alt="rocket logo"></img>
                    App
                </a>

                </LinkHolder>
            </ButtonFlex>
        )
    }
}

export default ProjectLinks

ProjectLinks.propTypes = {
    simonLinks: PropTypes.bool.isRequired,
    spaceLinks: PropTypes.bool.isRequired,
    crunchLinks: PropTypes.bool.isRequired
}