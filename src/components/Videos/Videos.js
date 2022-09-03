import React, { useState, useEffect, useRef} from "react";
import './Videos.css'
import {motion} from 'framer-motion'
import rightarrow from './assets/rightarrow.png'

const Videos = () => {
  const [width, setWidth] = useState(0)
  const videos = useRef();

  useEffect(() => {
    setWidth(videos.current.scrollWidth - videos.current.offsetWidth)
  }, [])

  return (
    <motion.div 
    ref={videos} 
    className='videos'
    >
      {/* <h1 className='videos-title'>Videos</h1> */}
      {/* <p>(click and drag!)</p> */}
      <div className='arrow'>
          <img src={rightarrow} className='right-arrow-icon' alt='right arrow icon'/>
      </div>
        <motion.div
        className='inner-videos' 
        drag='x'
        dragConstraints={{ right: 0, left: -width}}
        whileTap={{ cursor: "grabbing" }}
        >

      <div className='video-one'>
        <iframe
          className='one-year-anniversary'
          title='One Year Anniversary'
          width='854'
          height='480'
          src={'https://www.youtube.com/embed/YL5xkm2azxg?autoplay=1&mute=1'}>
        </iframe>

        {/* <p>
          Video explanation here
        </p> */}
      </div>

      <div className='video-two'>
        <iframe
          className='one-year-anniversary'
          title='One Year Anniversary'
          width='854'
          height='480'
          src={'https://www.youtube.com/embed/GAnvvUgQcd4?autoplay=1&mute=1'}>
        </iframe>

        {/* <p>
          Video explanation here
        </p> */}
      </div>

      <div className='video-three'>
        <iframe
          className='one-year-anniversary'
          title='One Year Anniversary'
          width='854'
          height='480'
          src={'https://www.youtube.com/embed/TqgT232G0Ck?autoplay=1&mute=1'}>
        </iframe>

        <p>
          Video explanation here
        </p>
      </div>

      <div className='video-four'>
        <iframe
          className='one-year-anniversary'
          title='One Year Anniversary'
          width='854'
          height='480'
          src={'https://www.youtube.com/embed/HIiEHhgNxsY?autoplay=1&mute=1'}>
        </iframe>
{/* 
        <p>
          Video explanation here
        </p> */}
      </div>


      <div className='video-five'>
        <iframe
          className='one-year-anniversary'
          title='One Year Anniversary'
          width='854'
          height='480'
          src={'https://www.youtube.com/embed/S8KqIH8cvRA?autoplay=1&mute=1'}>
        </iframe>

        {/* <p>
          Video explanation here
        </p> */}
      </div>

      <div className='video-six'>
        <iframe
          className='one-year-anniversary'
          title='One Year Anniversary'
          width='854'
          height='480'
          src={'https://www.youtube.com/embed/GAnvvUgQcd4?autoplay=1&mute=1'}>
        </iframe>

        {/* <p>
          Video explanation here
        </p> */}
      </div>

      </motion.div>
    </motion.div>
  )
}

export default Videos
