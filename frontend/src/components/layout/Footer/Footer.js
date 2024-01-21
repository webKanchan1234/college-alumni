import React from 'react'
import "./footer.css"
// import Slide1 from "./images/slide1.jpg"
import { Link } from "react-router-dom"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';


const Footer = () => {
  return (
    <>
    <div className='footer-container'>
      <div className="footer-left">
        <img src="./images/slide1.jpg" alt="image" />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis dignissimos adipisci.</p>
      </div>
      <div className="footer-mid">
        <div className="footer-mid-university">
          <p>University</p>
          <div className="footer-mid-alumni-icon-box">
            <div className="footer-mid-alumni-icon">
            <Link to="" id='link'>Students</Link>
            </div>
            <div className="footer-mid-alumni-icon">
            <Link to="" id='link'>Events</Link>
            </div>
            <div className="footer-mid-alumni-icon">
            <Link to="/gallery" id='link'>Gallery</Link>
            </div>
            <div className="footer-mid-alumni-icon">
            <Link to="/news" id='link'>News</Link>
            </div>
          </div>
        </div>
        <div className="footer-mid-alumni">
          <p>Alumni</p>
          <div className="footer-mid-alumni-icon-box">
            <div className="footer-mid-alumni-icon">
              <Link to="/contact" id='link'>Contacts</Link>
            </div>
            <div className="footer-mid-alumni-icon">
              <Link to="" id='link'>About us</Link>
            </div>
            <div className="footer-mid-alumni-icon">
              <Link to="" id='link'>Career</Link>
            </div>
            <div className="footer-mid-alumni-icon">
              <Link to="" id='link'>Apply to Job</Link>
            </div>
          </div>

        </div>
        <div className="footer-mid-account">
          <p>Account</p>
          <div className="footer-mid-alumni-icon-box">
            <div className="footer-mid-alumni-icon">
            <Link to="" id='link'>Profile</Link>
            </div>
            <div className="footer-mid-alumni-icon">
            <Link to="" id='link'>Stories</Link>
            </div>
            <div className="footer-mid-alumni-icon">
            <Link to="" id='link'>Password</Link>
            </div>
            <div className="footer-mid-alumni-icon">
            <Link to="" id='link'>Downloads</Link>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer-right">
        <div className="footer-right-link">
        <Link to="" className='footer-right-link1'>Alumni Account</Link>
        </div>

        <div className="right-icons">
          <Link to="">
          <FacebookOutlinedIcon className='icons'/>
          </Link>
          <Link to="">
          <TwitterIcon className='icons'/>
          </Link>
          <Link to="">
          <InstagramIcon className='icons'/>
          </Link>
          
        </div>
      </footer>
      
    </div>
    <hr className='hr'/>
    <p id='copy'>©2024 Alumni Association of the University of Sayidan</p>
    </>
  )
}

export default Footer