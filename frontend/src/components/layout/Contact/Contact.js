import React from 'react'
import "./contact.css"
import { Link } from "react-router-dom"
import GoogleMapReact from 'google-map-react';

const Contact = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };
  return (
    <>
      <div className="contact-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.087962560553!2d77.64690777508414!3d12.837592217802182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b9117e424a7%3A0x3931ea5aa5347159!2sButterfly%20PG!5e0!3m2!1sen!2sin!4v1705086919114!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className='address'>
        <div className="address-visit">
          <h2>Visit Us</h2>
          <p>Riga 3839, Vilku Pagasts, Latvia 57766. Office : Monday to Friday: 10am to 7pm</p>
          <Link to="" id='link'>Get Direction</Link>
        </div>
        <div className="address-touch">
          <h2>Get In Touch</h2>
          <p>TEL +1 9009634256
            EMAIL info@kenzap.com</p>
          <Link to="" id="link">sayidan.kenzap.com</Link>
        </div>
      </div>
      <div className="contact-form">
        <div className="form">
          <h3>We’d love to hear from you</h3>
          <form action="">
            <div className="name">
              <input type="text" placeholder='Full Name' />
            </div>
            <div className="name">
              <input type="text" placeholder='Phone Number' />
            </div>
            <div className="name">
              <input type="email" placeholder='Email Address' />
            </div>
            <div className="name">
              <input type="area" placeholder='Additional Information' />
            </div>
            <button className='btn-send'>Send Message</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact