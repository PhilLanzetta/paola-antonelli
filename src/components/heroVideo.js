import React from 'react'
import ReactPlayer from 'react-player'

const HeroVideo = ({ video }) => {
  return (
    <div className='hero-video-container'>
      <ReactPlayer
        url={video}
        controls
        width={'100%'}
        height={'100%'}
      ></ReactPlayer>
    </div>
  )
}

export default HeroVideo
