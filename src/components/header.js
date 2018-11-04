import React from 'react'
import { Link } from 'gatsby'
import HeroImage from '../components/heroImage'
import styled from 'styled-components'

const Card = styled.div`
    ${'' /* background: #6a6373; */}
    ${'' /* background: #80bbec; */}
    background: #f1f1f1;
    border-radius: 5px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    max-width: 295px;
`
const HeaderContainer = styled(Card) `
    ${'' /* background: #6a6273; */}
    
    height: 225px;
    margin: 40px auto 20px auto;
    width: 90%;
    ${'' /* border-radius: 5px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); */}
`
const HeaderContentWrapper = styled.div `
    margin: 0 auto;
    max-width: 960px;
    padding: 17px 1.0875rem;
`
const HeaderTitle = styled.h1`
    margin: 0;
`
const HeaderLink = styled(Link) `
    color: black;
    text-decoration: none;
    font-size: 26px;
    margin-top: 0;
    ${'' /* width: 201px; */}
    display: block;
    text-align: center;
    line-height: 30px;
        ${'' /* text-shadow: 0 1px 1px rgb(106, 80, 91); */}
`
const AboutMeWrapper = styled.div `
    height: 30px;
    width: 100px;
    ${'' /* background: #9f7688; */}
   background: #73b2fb;
    display: inline-block;
    text-align: center;
    margin-top: 30px;
    font-size: 14px;
    ${'' /* border-radius: 30px; */}
    font-weight: bold;
    ${'' /* text-shadow: 0 1px 2px rgba(0,0,0,0.75);
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); */}
        ${'' /* text-shadow: 0 1px 2px rgba(0,0,0,0.75); */}
            text-shadow: 0 1px 1px rgb(106,80,91);
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`
const AboutMeLink = styled(Link) `
    color: #ffffff;
    text-decoration: none;
    display: inline-block;
    padding-top: 3px;
    width: 100%;
    height: 100%;
`
const ButtonWrapper = styled.div `
    height: 41px;
    width: 160px;
    ${'' /* background-color: blue; */}
    display: block;
    margin: 5px auto 0 auto;
    text-align: center;
    border-radius: 30px;
        ${'' /* text-shadow: 0 1px 1px rgb(236,236,232); */}
    ${'' /* text-shadow: 0 1px 2px rgba(0,0,0,0.75); */}
        background: #73b2fb;
    ${'' /* background: #381716; */}
    outline: none;
    border-radius: 30px;
    ${'' /* border: 1px solid #4c0300; */}
        border: 1px solid #73b2fb;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    ${'' /* box-shadow: inset 1px 1px 0px rgba(255,255,255,0.25), inset 0 0 6px #ebe5e7, inset 0 80px 58px -13px #ebe5e7, 1px 1px 1px rgb(159, 118, 136); */}
    ${'' /* box-shadow: inset 1px 1px 0px rgba(255,255,255,0.25), inset 0 0 6px #d2d5ff, inset 0 80px 58px -13px #d2d5ff, 1px 1px 1px rgba(0,0,0,0.75); */}
    ${'' /* box-shadow: inset 1px 1px 0px rgba(255,255,255,0.25), inset 0 0 6px #d2d5ff, inset 0 80px 80px -40px #d2d5ff, 1px 1px 3px rgba(0,0,0,0.75); */}
    ${'' /* box-shadow: inset 1px 1px 0px rgba(255,255,255,0.25), inset 0 0 6px #ecece8, inset 0 80px 58px -13px #ecece8, 1px 1px 1px rgba(0,0,0,0.75); */}
        ${'' /* text-shadow: 0 1px 2px rgba(0,0,0,0.75); */}
            text-shadow: 0 1px 1px rgb(106,80,91);
`
const ContactButton = styled(Link) `
     color: #ffffff;
    vertical-align: middle;
    text-decoration: none;
    font-weight: bold;
    display: inline-block;
    padding-top: 8px;
`


const Header = ({ siteTitle }) => (
  <HeaderContainer as={Card}>
    <AboutMeWrapper>
      <AboutMeLink to="/project-one/">Projects</AboutMeLink>

    </AboutMeWrapper>
        {/* <AboutMeWrapper>
            <AboutMeLink to="/about/">About Me</AboutMeLink>

        </AboutMeWrapper> */}
    <HeaderContentWrapper>

      <HeaderTitle>
        <HeaderLink to="/">{siteTitle}</HeaderLink>
      </HeaderTitle>
    </HeaderContentWrapper>
    <HeroImage />
    <ButtonWrapper>
      <ContactButton to="/about/">Contact</ContactButton>
    </ButtonWrapper>
  </HeaderContainer>
)

export default Header
