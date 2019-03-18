
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
const ProjectOne = () => (
    <ProjectHolder>
				<p>Visualization of historic stock and crypto prices. </p>

        <br />

        <p>Search for stock or crypto prices and view data in line graph format.  Includes ability to view high, low, open and close prices.  Users can hover over data points for more detailed information.</p>
        
        <br />  
        
       <p>Built in <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">ReactJS</a> with D3, Redux, HTML, CSS and JavaScript.</p>
    </ProjectHolder>
)

export default ProjectOne