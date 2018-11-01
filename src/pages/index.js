import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/project-one/">Go to project 1</Link>
    <Link to="/project-one/">Go to page 2</Link>
    <Link to="/project-one/">Go to project 3</Link>
  </Layout>
)

export default IndexPage
