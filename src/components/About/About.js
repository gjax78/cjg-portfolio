import React from "react";
import './About.css'
import CJGRR from './assets/CJGRR.jpg'

const About = () => {
  return (
    <section className='about-container'>
      <img src={CJGRR} alt='headshot' className='headshot' />
      <div className='about-blurb-container'>
        <p className='about-header'>
        "Cinematography you can FEEL"
        </p>
        <p className='about-blurb'>
        Specialist in aerial drone cinematography, Somatic Cinema uses cutting edge technology to provide a unique and immersive first person view experience.
        </p>
      </div>
    </section>
  )
}

export default About