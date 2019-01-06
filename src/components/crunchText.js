
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
const CrunchText = () => (
    <ProjectHolder>
        <p>An internet radio station that plays live concert 
        recordings for a given band and year.</p>

        <br />

        <p>Once users create their station CrunchFM makes a 
        call to <a href="https://archive.org" target="_blank" rel="noopener noreferrer">archive.org&#39;s </a> 
        API and plays random live recordings based on the user&#39;s input. Users can change their station at any time to create a unique 
        listening experience.</p>
        
        <br />  
        
        <p>As a user&#39;s station plays, CrunchFM creates a dynamic playlist of all the songs that have been 
        listened to in that session. Users can then replay songs 
        with the click of a button.</p> 

        <br /> 
        
    <p>Built in <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">ReactJS</a> with HTML, CSS and JavaScript.</p>
    </ProjectHolder>
)

export default CrunchText