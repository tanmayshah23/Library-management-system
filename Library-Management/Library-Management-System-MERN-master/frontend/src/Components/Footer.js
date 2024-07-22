import React from 'react'
import './Footer.css'

import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <div className='footer'>
            <div>
                <div className='footer-data'>
                    <div className="contact-details">
                        <h1>Contact Us</h1>
                        <p>Sargent</p>
                        <p>online public library</p>
                        <p>Gandhinagar-382016</p>
                        <p>Gujarat</p>
                        <p>India</p>
                        <p><b>Email:</b>jasanghani126@gmail.com</p>
                    </div>
                    <div className='usefull-links'>
                        <h1>Usefull Links</h1>
                        <a href="https://stake.com/">Stake</a>
                    </div>
                    <div className='librarian-details'>
                        <h1>Librarian</h1>
                        <p>Maulik</p>
                        <p>M tech</p>
                        <p>Contact: +91 7043133236</p>
                    </div>
                </div>
                <div className="contact-social" >
                <a href="https://x.com/RaviSan87394950" className="social-icon">
    <TwitterIcon style={{ fontSize: 40, color: "rgb(283, 83, 75)" }} />
  </a>
  <a href="https://www.linkedin.com/in/ravi-sanghani-rs1205/" className="social-icon">
    <LinkedInIcon style={{ fontSize: 40, color: "rgb(283, 83, 75)" }} />
  </a>
  <a href="https://www.instagram.com/maulik.vara.2/" className="social-icon">
    <TelegramIcon style={{ fontSize: 40, color: "rgb(283, 83, 75)" }} />
  </a>
  <a href="https://www.instagram.com/maulik.vara.2/" className="social-icon">
    <InstagramIcon style={{ fontSize: 40, color: "rgb(283, 83, 75)" }} />
  </a>
                </div>
            </div>
            <div className='copyright-details'>
                <p className='footer-copyright'>&#169; 2024 copyright all right reserved<br /><span>Designed with ❤️ by MRT</span></p>
            </div>
        </div>
    )
}

export default Footer