
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
const SpaceText = () => (
    <ProjectHolder>
        <p>A search UI that pulls photos from NASA&#39;s image API.  Thanks NASA!  Users input search terms into the 
        search bar and results are displayed below.  
        Includes two different views, grid and list.  
        Give it a try!</p>

        <br/>

        <p>When the user inputs a serch term and hits &#34;Go&#34; 
        The front-end makes a call to the back-end which then 
        makes a call to NASA&#39;s image API.  Results are returned 
        the backend, procesed and sent to the front end where they 
        are then displayed.</p>

        <br />

        <p>The front end is built in VueJS with HTML, 
        CSS and JavaScript.  The back end is built in ExpressJS, 
        a Node based JavaScript framework.  Check out the Github 
        repo for the backend <a href="https://github.com/jacobg1/NasaSearch" target="_blank" rel="noopener noreferrer">here</a></p>
    </ProjectHolder>
)

export default SpaceText