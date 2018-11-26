import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { breakpoints } from './breakpoints'
import MobileMenu from '../components/mobileMenu'
import ParticleCircle from '../components/particlecircle'



const Card = styled.div`
  border-radius: 5px;
`

const HeaderContainer = styled(Card) `
  height: 255px;
  margin: 0 auto;
  background: #ef6060;
  border-radius: 0;
  
  @media ${breakpoints.laptop} {
    height: 300px;
  }
`

const HeaderContentWrapper = styled.div `
  position: relative;
  z-index: 0;

  @media ${breakpoints.mobile} {
    padding-top: 5px;
  }


  @media ${breakpoints.laptop} {
    padding-top: 13px;
    padding-bottom: 0;
  }
`

const HeaderTitle = styled.h1 `
      margin-bottom: 67px;

      @media ${breakpoints.mobile} {
            margin-bottom: 67px;
      }

      @media ${breakpoints.tablet} {
            margin-bottom: 73px;
      }
`

const HeaderLink = styled(Link) `
  color: #f1f1f1;
  text-decoration: none;
  font-size: 26px;
  max-width: 306px;
  padding-top: 95px;
  margin: 0 auto;
  display: block;
  text-align: center;
  line-height: 35px;
  text-shadow: 0 1px 1px rgb(106,80,91);
  font-family: 'Archivo';
  letter-spacing: 1px;

  @media ${breakpoints.mobile} {  
    font-size: 30px;
    padding-top: 91px;
  }

  @media ${breakpoints.tablet} {
    font-size: 35px;
    max-width: 354px;
    padding-top: 86px;
  }

  @media ${breakpoints.laptop} {
    font-size: 35px;
    padding-top: 0;
    margin-top: 100px;
    line-height: 46px;
  }

  @media ${breakpoints.desktop} {
    font-size: 42px;
    max-width: 423px;
    line-height: 50px;
    margin-top: 88px;
  }
`

const ButtonWrapper = styled.div `
  line-height: 41px;
  width: 160px;
  display: block;
  margin: 0 auto;
  text-align: center;
  border-radius: 30px;
  background: #73b2fb;
  outline: none;
  border-radius: 30px;
  border: 1px solid #73b2fb;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  text-shadow: 0 1px 1px rgb(106,80,91);
  transition: all .3s ease-in-out;
  cursor: pointer;

  :hover {
    background: #ef6060;
  }

  @media ${breakpoints.laptop} {
    display: none;
  }
`

const ContactButton = styled(Link) `
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
  display: block;
  font-size: 16px;

  @media ${breakpoints.mobile} {
    font-size: 17px;
  }

  @media ${breakpoints.desktop} {
    font-size: 20px;
  }
`

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: ""
    }
  }
  componentDidMount() {
    this.setState({ location: window.location.pathname })
  }
  render () {
    return (

      <React.Fragment>
        <HeaderContainer>
          <HeaderContentWrapper>

            <MobileMenu />

            <ParticleCircle
              left
              right={false}
            />

            <HeaderTitle>
              <HeaderLink to="/">{this.props.siteTitle}</HeaderLink>
            </HeaderTitle>

          </HeaderContentWrapper>

          <ButtonWrapper>
            {
        this.state.location !== '/' 
        ? <ContactButton to="/">Home</ContactButton>
        : <ContactButton to="/space-search/">Projects</ContactButton>
      }
          </ButtonWrapper>

        </HeaderContainer>
      </React.Fragment>

    )
  }

}

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}

export default Header


