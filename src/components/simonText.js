
import React from 'react'
import styled from 'styled-components'
import { breakpoints } from './breakpoints'


const ProjectHolder = styled.div`
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
const SimonText = () => (
    <ProjectHolder>

        <p>My first website.</p>
    
        <br />
    
        <p>A simple game of simon. Players must match 
        patterns of increasing complexity and length. 
        If a player makes an incorrect choice, they game starts over.
        Make it to level five and win! Includes sound on / off modes.</p>
    
        <br />
    
        <p>Created with JavaScript, HTML / CSS and JQuery.</p>
    
    </ProjectHolder>
)

export default SimonText