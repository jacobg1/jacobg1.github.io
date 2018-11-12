import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import HeroImage from '../components/heroImage'
import styled from 'styled-components'
import { breakpoints } from './breakpoints'
import MobileMenu from '../components/mobileMenu'

const Card = styled.div`
  border-radius: 5px;
  ${'' /* background: linear-gradient(135deg,rgb(235,229,231) 0%,rgb(115, 178, 251) 24%,rgb(121,206,253) 50%,rgb(115,178,251) 70%,rgb(235,229,231) 100%); */}
  ${'' /* box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); */}
  ${'' /* background: #73b2fb; */}
`

const HeaderContainer = styled(Card) `
  height: 225px;
  ${'' /* margin: 40px auto 20px auto; */}
  ${'' /* width: 90%;
  max-width: 393px; */}
  margin: 0 auto;
  
  @media ${breakpoints.tablet} {
    ${'' /* width: 65%;
    max-width: 613px; */}
  }

  @media ${breakpoints.laptop} {
    ${'' /* width: 50%; */}
    
  }
  @media ${breakpoints.desktop} {
    height: 250px;
  }
`

const HeaderContentWrapper = styled.div `
  ${'' /* margin: 0 auto; */}
  ${'' /* max-width: 960px;
  padding: 10px 1.0875rem 17px 1.0875rem; */}
  position: relative;

  @media ${breakpoints.mobile} {
    padding-top: 5px;
    ${'' /* padding-bottom: 25px; */}
  }


  @media ${breakpoints.laptop} {
    ${'' /* padding-top: 0;
    padding-bottom: 29px; */}
    padding-top: 13px;
    padding-bottom: 0;
  }

  @media ${breakpoints.desktop} {
    ${'' /* padding-bottom: 22px; */}
  }
`

const HeaderTitle = styled.h1 `
  ${'' /* margin: 48px auto 0 auto; */}
`

const HeaderLink = styled(Link) `
  color: #f1f1f1;
  text-decoration: none;
  font-size: 26px;
  max-width: 265px;
  padding-top: 70px;
  margin: 0 auto;
  display: block;
  text-align: center;
  line-height: 35px;
  text-shadow: 0 1px 1px rgb(106,80,91);
  
  @media ${breakpoints.header} {
    ${'' /* width: 265px; */}
  }

  @media ${breakpoints.mobile} {  
    font-size: 30px;
    padding-top: 60px;
  }

  @media ${breakpoints.laptop} {
    font-size: 35px;
    max-width: 290px;
    padding-top: 95px;
    line-height: 46px;
  }

  @media ${breakpoints.desktop} {
    font-size: 42px;
    max-width: 409px;
    line-height: 50px;
  }
`

// const AboutMeWrapper = styled.div `
//   line-height: 30px;
//   width: 100px;
//   background: #73b2fb;
//   display: inline-block;
//   text-align: center;
//   margin-top: 25px;
//   font-size: 14px;
//   font-weight: bold;
//   transition: outline .001s ease-in-out;
//   transition: opacity .3s ease-in-out;
//   transition: box-shadow .3s ease-in-out;
//   text-shadow: 0 1px 1px rgb(106,80,91);
//   box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

//   @media ${breakpoints.mobile} {
//     line-height: 35px;
//     width: 111px;
//     font-size: 16px;
//   }
//   :hover {
//     opacity: .7;
//     box-shadow: none;
//     outline: 1px solid #6496d0;
//     line-height: 34px;
//   }
// `

// const AboutMeLink = styled(Link) `
//   color: #ffffff;
//   text-decoration: none;
//   display: inline-block;
//   width: 100%;
//   height: 100%;  
  
// `


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
    ${'' /* opacity: .7;
    box-shadow: none;
    line-height: 39.2px;
    border: 2px solid #6496d0; */}
  }

  @media ${breakpoints.laptop} {
    display: none;
    ${'' /* line-height: 46px;
    width: 175px;
    margin-top: 1px; */}
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

const Header = ({ siteTitle, location }) => (
  
  <React.Fragment> 
    <HeaderContainer>
     
    {/* <AboutMeWrapper>
      <AboutMeLink to="/space-search/">Projects</AboutMeLink>
    </AboutMeWrapper> */}
    
    
      <HeaderContentWrapper>
        <MobileMenu location={location} />

        <HeaderTitle>
          <HeaderLink to="/">{siteTitle}</HeaderLink>
        </HeaderTitle>

      </HeaderContentWrapper>

      <HeroImage />

      <ButtonWrapper>
      {
        location !== '/' 
        ? <ContactButton to="/">Home</ContactButton>
        : <ContactButton to="/space-search/">Projects</ContactButton>
      }
        
      </ButtonWrapper>

    </HeaderContainer>
  </React.Fragment>
)

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
}

export default Header
