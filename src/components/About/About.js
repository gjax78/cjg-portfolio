import React from "react";
import headshot from './assets/headshot.jpeg'

const About = () => {
  return (
    <section className='about-container'>
      <img src={headshot} alt='headshot' className='headshot' />
    </section>
  )
}

export default About