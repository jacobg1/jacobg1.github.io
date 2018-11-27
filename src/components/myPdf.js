
import React from 'react';
import PDF from 'react-pdf-js-infinite';
import styled from 'styled-components'
import resume from '../images/resume.pdf'
import { breakpoints } from '../components/breakpoints'

const ResumeHolder = styled.div`
    text-align: center;
    padding-top: 50px;

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
`

export default class MyPdfViewer extends React.Component {

    render() {
        return (
            <ResumeHolder>
                <PDF file={resume} scale={2} />
            </ResumeHolder>
        )
    }
}

