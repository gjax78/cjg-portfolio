import './LandingPage.css'
import React from 'react'
import logo from './assets/somatic-logo.png'

const LandingPage = () => {
  return (
    <section className='landing-page-container'>
      <img src={logo} alt='logo' className='somatic-logo'/>
    </section>
  )
}

export default LandingPage