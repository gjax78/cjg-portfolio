import React from "react";
import email from './assets/email-icon.png'
import youtube from './assets/youtube-icon.png'
import tiktok from './assets/tiktok-icon.png'
import instagram from './assets/instagram-icon.png'
import facebook from './assets/facebook-icon.png'
import linkedin from './assets/linkedin-icon.png'

const Icons = () => {
  return (
    <section className='icon-container'>
      <img src={email} alt='email-icon' className='email-icon' />
      <img src={youtube} alt='youtube-icon' className='youtube-icon' />
      <img src={tiktok} alt='tiktok-icon' className='tiktok-icon' />
      <img src={instagram} alt='instagram-icon' className='instagram-icon' />
      <img src={facebook} alt='facebook-icon' className='facebook-icon' />
      <img src={linkedin} alt='linkedin-icon' className='linkedin-icon' />
    </section>
  )
}

export default Icons