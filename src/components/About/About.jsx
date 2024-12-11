import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile from '../../assets/profile.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
          <div className="about-left">
            <img src={profile} alt="" />
          </div>
          <div className="about-right">
            <div className="about-para">
              <p>I am an enthusiastic and aspiring software developer with a passion for coding, debugging, and software design. My academic background in Information Technology has provided me with a solid foundation in programming languages like HTML, CSS, JavaScript, and Java.</p>
              <p>. I am eager to bring my technical expertise and creativity to a forward-thinking organization where I can contribute to impactful solutions while continuing to grow as a developer.</p>
            </div>
            <div className="about-skills">
              <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}} /></div>
              <div className="about-skill"><p>React JS</p><hr style={{width:"60%"}} /></div>
              <div className="about-skill"><p>JavaScript</p><hr style={{width:"70%"}} /></div>
              <div className="about-skill"><p>Java</p><hr style={{width:"50%"}} /></div>
              <div className="about-skill"><p>Spring & SpringBoot</p><hr style={{width:"90%"}} /></div>
              <div className="about-skill"><p>SQL</p><hr style={{width:"60%"}} /></div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About