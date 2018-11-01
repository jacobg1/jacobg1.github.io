import React from "react";
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default function Template({
  data
}) {
  const post = data.markdownRemark;
  return (
    <Layout>
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
    </Layout>
  );
}
export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
  ;