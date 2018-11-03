import React from 'react'
import { Link } from 'gatsby'
import HeroImage from '../components/heroImage'
import styled from 'styled-components'

const HeaderContainer = styled.div `
    background: #6a6273;
    height: 225px;
    margin: 51px auto 20px auto;
    width: 79%;
`
const HeaderContentWrapper = styled.div `
    margin: 0 auto;
    max-width: 960px;
    padding: 15px 1.0875rem;
`
const HeaderTitle = styled.h1`
    margin: 0;
`
const HeaderLink = styled(Link) `
    color: white;
    text-decoration: none;
        font-size: 26px;
    margin-top: 68px;
    width: 201px;
    display: block;
`

const AboutMeLink = styled(HeaderLink) `
    padding-right: 15px;
    float: right;
    padding-top: 20px;
`
const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <HeaderContentWrapper>
      <HeaderTitle>
        <HeaderLink to="/">{siteTitle}</HeaderLink>
        {/* <AboutMeLink to="/about/">About Me</AboutMeLink> */}
      </HeaderTitle>
    </HeaderContentWrapper>
    <HeroImage />
  </HeaderContainer>
)

export default Header
