import React from 'react'
import './Hero.css'
import profile from '../../assets/profile.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Santhosh_Kumar_Resume from '../../assets/Santhosh_Kumar_Resume.pdf'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile} alt="" className='profile' />
        <h1><span>I'm Santhosh Kumar G,</span> Fullstack developer Based in Tindivanam.</h1>
        <p>I am a FullStack Developer and completed B.Tech(IT) in 2023.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <a href={Santhosh_Kumar_Resume} target='_blank' rel='noopener noreferrer' className="hero-resume">My Resume</a>
        </div>
    </div>
  )
}

export default Hero