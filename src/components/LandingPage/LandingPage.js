import './LandingPage.css'
import React from 'react'
import logo from './assets/somatic-logo.png'

const LandingPage = () => {
  return (
    <section className='landing-page-container'>
      <img src={logo} alt='logo' className='fade-in'/>
    </section>
  )
}

export default LandingPage