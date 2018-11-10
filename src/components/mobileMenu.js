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

    @media ${breakpoints.desktop} {
      height: 250px;
    }
`
const MobileMenuContainer = styled.div `
    display: inline;
    position: absolute;
    left: 15px;
    top: 15px;
    z-index: 1;

    & span {
        width: 35px;
        display: block;
        border-bottom: 6px solid #f1f1f1;
        box-shadow: 0px 3px #78b4f9;
        padding-bottom: 4px;
    }
`
class MobileMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showMenu: false 
        };
        this.openMenu = () => this.setState(prevState => ({
            showMenu: !prevState.showMenu
        }))
    }
    
    render () {
        const menu = (
            <MobileModal>
                <p>test</p>
            </MobileModal>
        )
        return (
            <>
            <MobileMenuContainer onClick={this.openMenu}>
                <span></span>
                <span></span>
                <span></span>   
            </MobileMenuContainer>
            { this.state.showMenu ? menu : '' }
            </>
        )
    }
}

export default MobileMenu