
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

    <p>A search UI that pulls in live concert recordings from 
     <a href="https://archive.org" target="_blank" rel="noopener noreferrer"> archive.org&#39;s </a> 
    API.</p>

    <br />

    <p>Features include a custom JavaScript music player, ability to 
    make playlists that persist across
    browser sessions and access to thousands of live concert recordings.</p>

    <br />

    <p>App also features a custom visualizer made by connecting to the browser&#39;s 
    audio api and using 
    <a href="https://d3js.org/" target="_blank" rel="noopener noreferrer"> D3.js</a> to 
    dynamically display a visual representation
    of the frequency of the sound waves for whichever song is playing. </p>

    <br />

    <p>The front end is built in <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">ReactJS</a> with HTML, CSS and JavaScript.
    The back end is built in <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">ExpressJS</a>, 
    a Node based JavaScript framework. Check out the GitHub repo for the back end 
    <a href="https://github.com/jacobg1/concert-search-BE" target="_blank" rel="noopener noreferrer"> here</a>.
    </p>
    
    </ProjectHolder>
)

export default SimonText