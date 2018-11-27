
import React from 'react';
import PDF from 'react-pdf-js-infinite';
import styled from 'styled-components'
import resume from '../images/resume.pdf'
import { breakpoints } from '../components/breakpoints'
import downloadIcon from '../images/file-download-solid.svg'

const ResumeHolder = styled.div`
    text-align: center;
    padding-top: 45px;

    @media ${breakpoints.laptop} {
        padding-top: 75px;
    }

    & canvas {
        max-width: 300px;
        margin: 0 auto;

        @media ${breakpoints.tablet} {
            max-width: 650px;
        }

        @media ${breakpoints.laptop} {
            max-width: 850px;
        }
    }

    & img {
        width: 35px;
        
        @media ${breakpoints.laptop} {
            width: 50px;
            position: absolute;
            right: 16px;
        }

        @media ${breakpoints.desktop} {
            right: 95px;
            width: 75px;
        }
    }
`

export default class MyPdfViewer extends React.Component {

    render() {
        return (
            <ResumeHolder>
                <a href={ resume } download><img src={downloadIcon} /></a>
                <PDF file={resume} scale={2} />
            </ResumeHolder>
        )
    }
}

