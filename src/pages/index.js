import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import { breakpoints } from '../components/breakpoints';


const ContentCard = styled.div `
  padding: 15px;
  width: 91%;
  margin: 50px auto 43px auto;
  border: 2px solid #ef6061;
  background: #4066b7;
  border-radius: 5px;
  max-width: 400px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

  @media ${breakpoints.tablet} {            
    max-width: 613px;
    padding: 25px;
    text-align: center;
  }

  @media ${breakpoints.laptop} {
    max-width: 700px;
  }
`

const BodyContainer = styled.div `
  margin: 0 auto;
`

const Statement = styled.p `
  margin: 0;
  font-size: 15px;
  color: #f1f1f1;
  font-weight: bold;
  line-height: 23px;
  letter-spacing: .7px;

  @media ${breakpoints.tablet} {
    font-size: 20px;
    line-height: 27px;
  }
`

const FlexContainer = styled.div `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 295px;
  margin: 0 auto;

  @media ${breakpoints.tablet} {
    max-width: 492px;
  }

  @media ${breakpoints.laptop} {
    max-width: 600px;
  }
`

const SkillsHolder = styled.div `
  background: #4065b7;
  color: #f1f1f1;
  border: 2px solid #ef6061;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  box-sizing: border-box;
  margin-bottom: 10px;
  width: calc(1/3*100% - (1 - 1/3)*10px);
  text-align: center;
  position: relative;
`

const Skill = styled.p `
  color: #f1f1f1;
  font-size: 14px;
  margin: 0;
  padding: 14px 0;
  font-weight: bold;
  letter-spacing: .7px;

  @media ${breakpoints.tablet} {
    padding: 20px 0;
    font-size: 16px;
  }

  @media ${breakpoints.laptop} {
    padding: 25px 0;
    font-size: 18px;
  }
`
const Shapes = styled.div`
  width: 13px;
  height: 13px;
  position: absolute;
  left: -5px;
  top: -5px; 
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`
const Circle = styled(Shapes)`
  background-color: #6692f9;
  border-radius: 100%;

  @media ${breakpoints.laptop} {
    left: -6px;
    width: 14px;
    height: 14px;
  }
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
const KeyContent = styled.div `
  width: 80%;
  margin: 43px auto;
  padding: 15px;
  border: 2px solid #f16b6c;
  background: #4971bf;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  max-width: 256px;

  @media ${breakpoints.tablet} {
    max-width: 496px;
    padding: 25px;
    display: flex;
    justify-content: space-between;
    margin: 50px auto;
  }
`

const KeyHolder = styled.div `
  position: relative;
  display: inline-block;
`

const KeyCircle = styled(Circle) `
  position: static;
  display: inline-block;
  width: 13px;
  height: 13px;
`
const KeySquare = styled(Square)`
  position: static;
  display: inline-block;
  margin-left: 19px;
 
  @media ${breakpoints.tablet} {
    margin-left: 7px;
  }
`
const KeyTriangle = styled(Triangle)`
  position: static;
  display: inline-block;
  margin-top: 5px;
  filter: drop-shadow(0px 2.5px 1.6px #6a6373);

  @media ${breakpoints.tablet} {
    margin-top: -13px;
    margin-bottom: 2px;
  }
`
const Key = styled.span`
  padding-left: 5px;
  font-size: 15px;
  font-weight: bold;
  color: #0c1d96;
  letter-spacing: .7px;
  color: #f1f1f1;

  @media ${breakpoints.tablet} {
    font-size: 17px;
  }
`
var mySkills = [
  { type: 'lang', name: 'JavaScript' }, 
  { type: 'frame', name: 'AngularJS' },
  { type: 'db', name: 'SQL' },
  { type: 'frame', name: 'React' },
  { type: 'lang', name: 'CSS/SASS' },
  { type: 'db', name: 'MongoDB' },
  { type: 'frame', name: 'Rails' },
  { type: 'frame', name: 'ExpressJS' },
  { type: 'lang', name: 'PHP' },
  { type: 'lang', name: 'Ruby' },
  { type: 'db', name: 'GraphQL' },
  { type: 'frame', name: 'Drupal' },
  { type: 'frame', name: 'Angular2+'},
  { type: 'frame', name: 'WordPress'},
  { type: 'lang', name: 'CSS in JS'}
];


const IndexPage = () => (
  <Layout>
        <BodyContainer>
            <ContentCard>         
                <Statement>
                    A creative thinker who uses ingenuity to find innovative solutions to
                    challenging problems. I use insight, imagination and coding fundamentals to
                    create success by drawing on my dedication, persistence and passion for web
                    development
                </Statement>
            </ContentCard>

            <KeyContent>
              <KeyHolder>
                  <KeyCircle></KeyCircle>
                  <Key>- language</Key>
              </KeyHolder>
              <KeyHolder>
                <KeySquare></KeySquare>
                <Key>- framework</Key>
              </KeyHolder>
              <KeyHolder>
                <KeyTriangle></KeyTriangle>
                <Key>- database</Key>
              </KeyHolder>
            </KeyContent>
      
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

