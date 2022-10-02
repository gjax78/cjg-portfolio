import './LandingPage.css'
import React from 'react'
import transparent from './assets/Transparent.png'

const LandingPage = () => {
  return (
    <section className='landing-page-container'>
      <img src={transparent} alt='logo' className='fade-in'/>
    </section>
  )
}

export default LandingPage