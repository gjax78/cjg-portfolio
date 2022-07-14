import React from "react";
import './Icons.css'
import email from './assets/email-icon.png'
import youtube from './assets/youtube-icon.png'
import tiktok from './assets/tiktok-icon.png'
import instagram from './assets/instagram-icon.png'
import facebook from './assets/facebook-icon.png'
import linkedin from './assets/linkedin-icon.png'

const Icons = () => {
  return (
    <section className='icon-container'>
      <a href='mailto:somatic.fpv@gmail.com' target='blank'>
        <img src={email} alt='email-icon' className='email-icon' />
      </a>
      <a href='https://www.youtube.com/channel/UCUxjbEtezPFLt733gmrh8qw' target='blank'>
        <img src={youtube} alt='youtube-icon' className='youtube-icon' />
      </a>
      <a href='https://www.tiktok.com/@somatic.fpv' target='blank'>
        <img src={tiktok} alt='tiktok-icon' className='tiktok-icon' />
      </a>
      <a href='https://www.instagram.com/somatic.fpv/?hl=en' target='blank'>
        <img src={instagram} alt='instagram-icon' className='instagram-icon' />
      </a>
      <a href='https://m.facebook.com/somatic.cinema/' target='blank'>
        <img src={facebook} alt='facebook-icon' className='facebook-icon' />
      </a>
      <a href='https://www.linkedin.com/in/cameron-goldberg-543710214/' target='blank'>
        <img src={linkedin} alt='linkedin-icon' className='linkedin-icon' />
      </a>
    </section>
  )
}

export default Icons