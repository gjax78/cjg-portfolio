import React from "react";
import './Footer.css'
import logo from './assets/no-text-logo.png'

const Footer = () => {
  return (
    <section className='footer-container'>
      <img src={logo} alt='logo' className='footer-logo'/>
    </section>
  )
}

export default Footer