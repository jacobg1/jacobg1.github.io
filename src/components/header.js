import React from 'react'
import { Link } from 'gatsby'
import HeroImage from '../components/heroImage'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
        {/* <Link
          to="/about/"
          style={{
            color: 'white',
            textDecoration: 'none',
            float: 'right',
            fontSize: 15,
            paddingRight: 30,
            paddingTop: 15,
      }}
    >
      About Me
        </Link> */}
      </h1>
    </div>
    <HeroImage />
  </div>
)

export default Header
