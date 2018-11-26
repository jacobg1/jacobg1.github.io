import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Particles from 'react-particles-js'
import { breakpoints } from './breakpoints';

const ParticleHolder = styled.div `
        background-image: radial-gradient(#b7acac,#52668c,#1e1c43);
        /* background-image: radial-gradient(#e2a6a6,#a03e62,rgb(41,35,37)); */
        /* background-image: radial-gradient(#ffc3c3,#d84e81,#1e1c43); */
        /* box-shadow: -6px -1px 20px 0px rgba(179, 177, 106, 0.96), 0 3px 6px rgba(0,0,0,0.23); */
            box-shadow: -6px -1px 20px 0px rgb(241, 241, 241), 6px -1px 20px 0px rgb(241, 241, 241);
        width: 150px;
        height: 150px;
        border-radius: 100%;
        position: absolute;
        top: 56px;
        z-index: -1;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;

        & canvas {
            width: 150px !important;
            height: 150px !important;
            border-radius: 50%;
            @media ${breakpoints.tablet} {
                width: 170px !important;
                height: 170px !important;
            }
            @media ${breakpoints.laptop} {
                width: 180px !important;
                height: 180px !important;
            }
            @media ${breakpoints.desktop} {
                width: 200px !important;
                height: 200px !important;
            }
        }

        ${({ moveLeft }) => moveLeft && `
            /* left: 12%; */
        `}

        ${({ moveRight }) => moveRight && `
            right: 5%;
        `}
        @media ${breakpoints.tablet} {
                width: 170px;
                height: 170px;
                top: 43px;
        }
        @media ${breakpoints.laptop} {
            width: 180px;
            height: 180px;
            top: 68px;
        }

        @media ${breakpoints.desktop} {
            width: 200px;
            height: 200px;
            top: 50px;
        }
   
`

class ParticleCircle extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
                <ParticleHolder
                    moveLeft={this.props.left}
                    moveRight={this.props.right}
                >
                    <Particles
                        params={{
                        "particles": {
                            "number": {
                                "value": 600,
                                "density": {
                                    "enable": true,
                                    "value_area": 400
                                }
                            },
                            "color": {
                                "value": "#ffffff"
                            },
                            "shape": {
                                "type": "circle",
                                "stroke": {
                                    "width": 3,
                                    "color": "#73b2fb"
                                },
                                "polygon": {
                                    "nb_sides": 5
                                },
                                "image": {
                                    "src": "img/github.svg",
                                    "width": 100,
                                    "height": 100
                                }
                            },
                            "opacity": {
                                "value": 0.48927153781200905,
                                "random": false,
                                "anim": {
                                    "enable": true,
                                    "speed": 0.2,
                                    "opacity_min": 0,
                                    "sync": false
                                }
                            },
                            "size": {
                                "value": 2,
                                "random": true,
                                "anim": {
                                    "enable": true,
                                    "speed": 2,
                                    "size_min": 0,
                                    "sync": false
                                }
                            },
                            "line_linked": {
                                "enable": false,
                                "distance": 150,
                                "color": "#ffffff",
                                "opacity": 0.4,
                                "width": 1
                            },
                            "move": {
                                "enable": true,
                                "speed": 3,
                                "direction": "none",
                                "random": true,
                                "straight": false,
                                "out_mode": "out",
                                "bounce": false,
                                "attract": {
                                    "enable": false,
                                    "rotateX": 600,
                                    "rotateY": 1200
                                }
                            }
                        },
                        "interactivity": {
                            "detect_on": "canvas",
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "bubble",
                                    "size": 100
                                },
                                "onclick": {
                                    "enable": true,
                                    "mode": "push"
                                },
                                "resize": true
                            },
                            "modes": {
                                "grab": {
                                    "distance": 400,
                                    "line_linked": {
                                        "opacity": 1
                                    }
                                },
                                "bubble": {
                                    "distance": 83.91608391608392,
                                    "size": 3,
                                    "duration": 3,
                                    "opacity": 1,
                                    "speed": 3
                                },
                                "repulse": {
                                    "distance": 200,
                                    "duration": 0.4
                                },
                                "push": {
                                    "particles_nb": 4
                                },
                                "remove": {
                                    "particles_nb": 2
                                }
                            }
                        },
                        "retina_detect": true
                        }}
                        style={{
                            width: '100%',
                        }}
                    />
             </ParticleHolder>
        )
    }
}

export default ParticleCircle

ParticleCircle.propTypes = {
    left: PropTypes.bool.isRequired,
    right: PropTypes.bool.isRequired
}