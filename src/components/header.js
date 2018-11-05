import React from 'react'
import { Link } from 'gatsby'
import HeroImage from '../components/heroImage'
import styled from 'styled-components'

const Card = styled.div`
  ${'' /* background: #f1f1f1; */}
  border-radius: 5px;
  ${'' /* background: linear-gradient(135deg, rgb(115, 178, 251) 0%, rgb(94, 144, 255) 24%, rgb(121, 206, 253) 50%, rgb(115, 178, 251) 75%, rgb(115, 178, 251) 100%); */}
  background: linear-gradient(135deg,rgb(235,229,231) 0%,rgb(115, 178, 251) 24%,rgb(121,206,253) 50%,rgb(115,178,251) 70%,rgb(235,229,231) 100%);
  ${'' /* background: linear-gradient(135deg,rgb(235, 229, 231) 0%,rgb(94,144,255) 24%,rgb(121,206,253) 50%,rgb(115,178,251) 75%,rgb(235, 229, 231) 100%); */}
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  max-width: 295px;
`
const HeaderContainer = styled(Card) `
  height: 225px;
  margin: 40px auto 20px auto;
  width: 90%;
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
  color: #f1f1f1;
  text-decoration: none;
  font-size: 26px;
  margin-top: 0;
  display: block;
  text-align: center;
  line-height: 30px;
  text-shadow: 0 1px 1px rgb(106,80,91);
`
const AboutMeWrapper = styled.div `
  height: 30px;
  width: 100px;
  background: #73b2fb;
  display: inline-block;
  text-align: center;
  margin-top: 30px;
  font-size: 14px;
  font-weight: bold;
  text-shadow: 0 1px 1px rgb(106,80,91);
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`
const AboutMeLink = styled(Link) `
  color: #ffffff;
  text-decoration: none;
  display: inline-block;
  padding-top: 5px;
  width: 100%;
  height: 100%;
`
const ButtonWrapper = styled.div `
  height: 41px;
  width: 160px;
  display: block;
  margin: 5px auto 0 auto;
  text-align: center;
  border-radius: 30px;
  background: #73b2fb;
  outline: none;
  border-radius: 30px;
  border: 1px solid #73b2fb;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  text-shadow: 0 1px 1px rgb(106,80,91);
`
const ContactButton = styled(Link) `
  color: #ffffff;
  vertical-align: middle;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  padding-top: 9px;
  font-size: 16px;
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
