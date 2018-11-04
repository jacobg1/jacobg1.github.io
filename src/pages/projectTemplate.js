import React from "react";
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'

const ProjectCard = styled.div`
   background: #f1f1f1;
    border-radius: 5px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    max-width: 295px;
    margin: 0 auto;

`

export default function Template({ data }) {
  const project = data.markdownRemark
  return (
    <Layout>
      <h1>{project.frontmatter.title}</h1>

      <ProjectCard>
      <div className="project">
        <div
          className="project-content"
          dangerouslySetInnerHTML={{ __html: project.html }}
        />
      </div>
      </ProjectCard>
    </Layout>
  );
}
export const pageQuery = graphql`
  query ProjectByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`