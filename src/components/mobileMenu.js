import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { breakpoints } from './breakpoints'

const MobileModal = styled.div `
    border-radius: 5px;
    background: linear-gradient(135deg,rgb(235,229,231) 0%,rgb(115, 178, 251) 24%,rgb(121,206,253) 50%,rgb(115,178,251) 70%,rgb(235,229,231) 100%);
    position: absolute;
    left: 50%;                
    transform: translateX(-50%);
    top: 0;
    height: 225px;
    width: 100%;
    padding-top: 20px;

    @media ${breakpoints.desktop} {
      height: 250px;
    }

    & a {
      text-decoration: none;
      font-size: 24px;
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

    & span {
        width: 35px;
        display: block;
        border-bottom: 6px solid #f1f1f1;
        box-shadow: 0px 3px #78b4f9;
        padding-bottom: 4px;  
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
        display: none;
    } 
`
class MobileMenu extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            showMenu: false,
            rotate: false 
        };
        
        this.openMenu = () => this.setState(prevState => ({
            showMenu: !prevState.showMenu,
            rotate: !prevState.rotate
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
                rotate: true
            })

        } else {
            this.setState({ 
                showMenu: false,
                rotate: false
            })
        }
    }
    render () {
        
        const menu = (
            <MobileModal>
                <Link to="#">Resume</Link>
                <Link to="/space-search">Projects</Link>
                <Link to="#">GitHub</Link>
                <Link to="#">Contact</Link>
            </MobileModal>
        )
        return (
          <React.Fragment>
            <MobileMenuContainer onClick={this.openMenu}>
                <span className={ this.state.rotate ? "rotateUp" : "" }></span>
                <span className={ this.state.rotate ? "disappear" : "" }></span>
                <span className={ this.state.rotate ? "rotateDown" : "" }></span>   
            </MobileMenuContainer>
            { this.state.showMenu ? menu : '' }
          </React.Fragment>
        )
    }
}

export default MobileMenu