import React from "react";
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default function Template({ data }) {
  const project = data.markdownRemark
  return (
    <Layout>
    <div className="project-container">
      <div className="project">
        <h1>{project.frontmatter.title}</h1>
        <div
          className="project-content"
          dangerouslySetInnerHTML={{ __html: project.html }}
        />
      </div>
    </div>
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