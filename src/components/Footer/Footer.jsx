import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <footer id='' className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="Footer Logo" />
                <p></p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="User Icon" />
                    <input type="email"  placeholder='Enter E-Mail' aria-label='Email Address'/>
                </div>
                <button className="footer-subscribe">Subscribe</button>
            </div>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-bottom">
            <p className="footer-bottom-left">@{new Date().getFullYear()} Santhosh Kumar</p>
            <div className="footer-bottom-right">
                <a href='/terms-of-service'>Term of Services</a>
                <a href='/privacy-policy'>Privacy Policy</a>
                <a href='#connect'>Connect With Me</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer