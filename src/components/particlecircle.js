import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Particles from 'react-particles-js'
import { breakpoints } from './breakpoints';

const ParticleHolder = styled.div `
        background: #1e1c43;
        background-image: radial-gradient(#b7acac,#52668c,#1e1c43);
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
            @media ${breakpoints.tablet} {
                width: 170px !important;
                height: 170px !important;
            }
            @media ${breakpoints.laptop} {
                width: 180px !important;
                height: 180px !important;
            }
            @media ${breakpoints.desktop} {
                width: 220px !important;
                height: 220px !important;
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
            width: 220px;
            height: 220px;
            top: 41px;
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
                                    "value_area": 789.1476416322727
                                }
                            },
                            "color": {
                                "value": "#ffffff"
                            },
                            "shape": {
                                "type": "circle",
                                "stroke": {
                                    "width": 2,
                                    "color": "#000000"
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
                                "speed": 1,
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
                                    "mode": "bubble"
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
                                    "size": 1,
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