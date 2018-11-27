import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { breakpoints } from '../components/breakpoints'
import Layout from '../components/layout'

const ContentCard = styled.div`
  padding: 15px;
  width: 91%;
  margin: 125px auto 104px auto;
  background: #f1f1f1;
  border-radius: 5px;
  max-width: 400px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

  @media ${breakpoints.tablet} {            
    max-width: 662px;
    padding: 25px;
    text-align: left;
  }

  @media ${breakpoints.laptop} {
    max-width: 700px;
  }

  & h2, p {
    color: #0c1d96;
  }
  & p {
    margin-bottom: 10px;
  }
  & a {
    color: #ef6061;
    text-decoration: none;
    transition: color .3s ease-in-out;
    :hover {
      color: #0c1d96;
    }
  }
`

const IconCredit = () => (
  <Layout>
    <ContentCard>
      <h2>Icons on this site:</h2>
      <p>Planet icon made by <a href="https://www.flaticon.com/authors/smalllikeart" title="smalllikeart">smalllikeart</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></p>
      <p>Record player icon made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></p>
      <p>Simon icon made by <a href="https://www.flaticon.com/authors/creaticca-creative-agency" title="Creaticca Creative Agency">Creaticca Creative Agency</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></p>
      <p>Favicon provided by <a href="https://www.flaticon.com/authors/gregor-cresnar" title="Gregor Cresnar">Gregor Cresnar</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></p>
      <p>Github, rocket and file download icons provided by <a href="https://fontawesome.com/license" terget="_blank" rel="noopener noreferrer">Font Awesome</a></p>
      <Link to="/">Go back to the homepage</Link>
    </ContentCard>
  </Layout>
  
)

export default IconCredit
