import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { breakpoints } from './breakpoints'

const MobileModal = styled.div `
    ${'' /* border-radius: 5px; */}
    ${'' /* background: linear-gradient(135deg,rgb(235,229,231) 0%,rgb(115, 178, 251) 24%,rgb(121,206,253) 50%,rgb(115,178,251) 70%,rgb(235,229,231) 100%); */}
    position: absolute;
    background: #ef6060;
    ${'' /* left: 50%;                
    transform: translateX(-50%); */}
    top: 0;
    height: 244.4px;
    width: 100%;
    padding-top: 43px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

    @media ${breakpoints.specialHeader} {
        width: 200px;
    }
    @media ${breakpoints.laptop} {
      ${'' /* height: 250px; */}
      display: none;
    }

    & a {
      text-decoration: none;
      font-size: 21px;
      font-weight: 500;
      padding: 9px 0;
      display: block;
      width: 41%;
      margin: 0 auto;
      text-align: center;
      color: white;
      text-shadow: 0 1px 1px rgb(106,80,91)
    }
`
const MobileMenuContainer = styled.div `
    display: inline;
    position: absolute;
    left: 15px;
    top: 15px;
    z-index: 1;
    cursor: pointer;
    @media ${breakpoints.laptop} {
        display: none;
    }
    & span {
        width: 35px;
        display: block;
        border-bottom: 6px solid #f1f1f1;
        box-shadow: 0px 3px #78b4f9;
        padding-bottom: 4px;  
        
    }
    & span.transition {
        transition: transform .5s ease-in-out;
    }
    & span.transitionBack {
        transition: transform .2s ease-in-out;
    }
    & span.rotateUp {
        transform: rotate(45deg);
        position: absolute;
        top: 8px;
        width: 40px;
    }
    & span.rotateDown {
        transform: rotate(-45deg);
        position: absolute;
        top: 8px;
        width: 40px;
        left: -4px;
    }
    & span.disappear {
        visibility: hidden;
    } 
    & span.rotateBackUp {
        ${'' /* transform: rotate(0); */}
    }
    & span.rotateBackDown {
        ${'' /* transform: rotate(0); */}
    }
`

const DesktopMenu = styled.div `
    display: none;

    @media ${breakpoints.laptop} {
        display: block;
        float: right;
        padding-right: 35px;
        padding-top: 30px;
        
    }

    & a {
        color: white;
        display: block;
        text-decoration: none;
        font-size: 15px;
        text-shadow: 0 1px 1px rgb(41, 35, 37);
        font-weight: bold;
         padding: 5px 19px 7px 19px;
        
    }
`

const MenuButton = styled.div `
    display: inline-block;
    margin-left: 25px;
    border-radius: 30px;
    border: 2px solid #73b2fb;
    background: #70b0fe;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    transition: all .3s ease-in-out;
    :hover {
        background: #ef6060;
        box-shadow: none;
    }
`

var links = [
    { text: 'Projects', href: '/space-search/' },
    { text: 'Contact', href: '/contact/' },
    { text: 'Resume', href: '#' },
    { text: 'Github', href: 'https://github.com/jacobg1' },
]

class MobileMenu extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            showMenu: false,
            rotate: false,
            transition: true 
        };
        
        this.openMenu = () => this.setState(prevState => ({
            showMenu: !prevState.showMenu,
            rotate: !prevState.rotate,
            transition: true
        }), function () {
            if(this.state.showMenu) {
                localStorage.setItem('open', '1')
            } else {
                localStorage.setItem('open', '2')
            }
        })
        
    }
    componentDidMount () {
        let checkOpen = localStorage.getItem('open')

        if(checkOpen === '1') {

            this.setState({ 
                showMenu: true,
                rotate: true,
                transition: false
              
                
            })

        } else {
            this.setState({ 
                showMenu: false,
                rotate: false,
                transition: false
             
                
            })
        }
    }
    render () {
        
        const menu = (
            <MobileModal>
            {
                links.map((link, index) => (
                    link.text === 'Github' ? 
                    <a 
                      key={ index }
                      href={ link.href }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      { link.text }  
                    </a> 
                    : link.text === 'Projects' 
                      && this.props.location !== '/' 
                      && this.props.location !== '/contact/'

                    ? <Link key={ index } to="/">Home</Link>

                    : link.text === 'Contact' 
                      && this.props.location !== '/' 
                      && this.props.location === '/contact/'

                    ? <Link key={index} to="/">Home</Link>

                    : <Link key={ index } to={ link.href }>
                        { link.text }
                      </Link>
                ))
            }
            </MobileModal>
        )
        return (
          <React.Fragment>
            <MobileMenuContainer onClick={ this.openMenu }>
                    <span className={this.state.rotate && this.state.transition ? "rotateUp transition" : this.state.rotate ? "rotateUp" : "transitionBack" }></span>
                    <span className={this.state.rotate && this.state.transition ? "disappear transition" : this.state.rotate ? "disappear" : "" }></span>
                    <span className={this.state.rotate && this.state.transition ? "rotateDown transition" : this.state.rotate ? "rotateDown" : "transitionBack" }></span>   
            </MobileMenuContainer>
            { this.state.showMenu ? menu : '' }

            <DesktopMenu>
            {
                links.map((link, index) => (
                  link.text === 'Github' ?
                      <MenuButton key={ index }>
                    <a
                      href={ link.href }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      { link.text }
                    </a> 
                    </MenuButton>

                    : link.text === 'Projects' 
                      && this.props.location !== '/' 
                      && this.props.location !== '/contact/'

                    ? <MenuButton key={ index }>
                        <Link to="/">Home</Link>
                    </MenuButton>

                    : link.text === 'Contact' 
                      && this.props.location === '/contact/' 

                    ? <MenuButton key={ index }>
                        <Link to="/">Home</Link>
                    </MenuButton>

                    : <MenuButton key={ index }>
                        <Link to={ link.href }>{ link.text }</Link>
                    </MenuButton>
                ))
            }
        
            </DesktopMenu>

          </React.Fragment>
        )
    }
}

export default MobileMenu

MobileMenu.propTypes = {
    location: PropTypes.string.isRequired
}