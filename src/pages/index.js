import React from 'react'
import { graphql } from 'gatsby'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'

const ContentCard = styled.div `
  max-width: 295px;
  padding: 15px;
  width: 91%;
  margin: 43px auto;
  background: #f1f1f1;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`

const BodyContainer = styled.div `
  margin: 0 auto;
`

const StyledLink = styled(Link)`
  color: #ffffff;
`
const LinkContainer = styled.div`
  height: 41px;
  width: 160px;
  display: block;
  margin: 40px auto 0 auto;
  text-align: center;
  border-radius: 30px;
  text-shadow: 0 1px 2px rgba(0,0,0,0.75);
  outline: none;
  border-radius: 30px;
  border: 1px solid #4c0300;
  box-shadow: inset 1px 1px 0px rgba(255,255,255,0.25), inset 0 0 6px #d2d5ff, inset 0 80px 58px -13px #d2d5ff, 1px 1px 1px rgba(0,0,0,0.75);
`
const Statement = styled.p `
  margin: 0;
  font-size: 15px;
  color: black;
  font-weight: bold;
`

const FlexContainer = styled.div `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 295px;
  margin: 0 auto;
`

const SkillsHolder = styled.div `
  background: #73b2fb;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  box-sizing: border-box;
  margin-bottom: 10px;
  width: calc(1/3*100% - (1 - 1/3)*10px);
  text-align: center;
  position: relative;
`
const Skill = styled.p `
  color: white;
  font-size: 14px;
  margin: 0;
  padding: 14px 0;
  text-shadow: 0 1px 1px rgb(106,80,91);
  font-weight: bold;
`
const Shapes = styled.div`
  width: 13px;
  height: 13px;
  position: absolute;
  left: -3px;
  top: -3px;   
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`
const Circle = styled(Shapes)`
  background-color: #6692f9;
  border-radius: 100%;
`
const Square = styled(Shapes)`
  border-radius: 0;
  background-color: #79cffe;
`
const Triangle = styled(Shapes)`
  position: absolute;
  left: -7px;
  top: -20px;
  border: 10px solid black;
  border-left-color: transparent;
  border-right-color: transparent;
  border-top-color: transparent;
  border-bottom-color: #ddffe9;
  border-top-width: 13px;
  border-bottom-width: 12px;
  border-right-width: 8px;
  border-left-width: 8px;
  box-shadow: none;
  filter: drop-shadow(0px 2.5px 1px #6a6373);
`
var mySkills = [
  { type: 'lang', name: 'JS' }, 
  { type: 'frame', name: 'Angular' },
  { type: 'db', name: 'SQL' },
  { type: 'frame', name: 'React' },
  { type: 'lang', name: 'CSS' },
  { type: 'db', name: 'MongoDB' },
  { type: 'frame', name: 'Rails' },
  { type: 'frame', name: 'ExpressJS' },
  { type: 'lang', name: 'PHP' },
  { type: 'lang', name: 'Ruby' },
  { type: 'db', name: 'GraphQL' },
  { type: 'frame', name: 'Drupal' },
];


const IndexPage = () => (
    <Layout>
        <BodyContainer>
            {/* <h1>Jacob Greenwald</h1> */}
            <ContentCard>
                <Statement>
                    A creative thinker who uses ingenuity to find innovative solutions to
                    challenging problems. I use insight, imagination and coding fundamentals to
                    create success by drawing on my dedication, persistence and passion for web
                    development
                </Statement>
                {/* <LinkContainer>
                  <StyledLink to="/project-one/">Projects</StyledLink>
                </LinkContainer>   */}
            </ContentCard>
            <FlexContainer>
                {
                  mySkills.map((skill, index) => (
                    <SkillsHolder key={index}>
                      {
                        skill.type === 'lang' ? <Circle></Circle>
                        : skill.type === 'frame' ? <Square></Square>
                        : <Triangle></Triangle>
                      }
                      <Skill>{skill.name}</Skill>
                    </SkillsHolder>
                  ))
                }
            </FlexContainer>
        </BodyContainer>
    </Layout>
)

export default IndexPage

export const pageQuery = graphql `
  query {
    backgroundImage: file(relativePath: { regex:"/pineapple/" }) {
       childImageSharp {
        sizes(maxWidth: 1500) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`