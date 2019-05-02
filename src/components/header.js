import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { breakpoints } from './breakpoints'
import MobileMenu from '../components/mobileMenu'
// import ParticleCircle from '../components/particlecircle'



const Card = styled.div`
  border-radius: 5px;
	position: fixed;
	top: 0;
  width: 100%;
`

const HeaderContainer = styled(Card) `
  ${'' /* height: 272px; */}
  margin: 0 auto;
  background: #ef6060;
  border-radius: 0;
	background: #4971be;
	z-index: 2;
`

const HeaderContentWrapper = styled.div `
  position: relative;
  z-index: 0;
	border-bottom: 3px solid #e7e9ee;
`

const HeaderTitle = styled.h1 `
		margin: 0;
		font-size: 19px;
		display: inline-block;
    padding: 17px 12px;
    vertical-align: middle;
		max-width: 46%;
    @media ${breakpoints.tablet} {
			font-size: 27px;
			padding: 20px 25px;
    }
`

const HeaderLink = styled(Link) `
  color: #f1f1f1;
  text-decoration: none;
  text-shadow: 0 1px 1px rgb(106,80,91);
  font-family: 'Archivo', sans-serif;
  letter-spacing: 1px;
`

const ButtonWrapper = styled.div`
  line-height: 21px;
	position: absolute;
	right: 70px;
	top: 44%;
  transform: translateY(-43%);
  width: 70px;
	display: inline-block;
  text-align: center;
  border-radius: 30px;
  ${'' /* background: #73b2fb; */}
  outline: none;
  border: 1px solid #73b2fb;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  text-shadow: 0 1px 1px rgb(106,80,91);
  transition: all .3s ease-in-out;
  cursor: pointer;
	z-index: -1;

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
  /* font-weight: bold; */
  display: block;
  font-size: 12px;

  ${'' /* @media ${breakpoints.mobile} {
    font-size: 17px;
  }

  @media ${breakpoints.desktop} {
    font-size: 20px;
  } */}
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

            <HeaderTitle>
              <HeaderLink to="/">{this.props.siteTitle}</HeaderLink>
            </HeaderTitle>

						<MobileMenu />
						<ButtonWrapper>
							{
								this.state.location !== '/'
									? <ContactButton to="/">Home</ContactButton>
									: <ContactButton to="/projects/">Projects</ContactButton>
							}
						</ButtonWrapper>
          </HeaderContentWrapper>

        </HeaderContainer>
      </React.Fragment>

    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}

export default Header


