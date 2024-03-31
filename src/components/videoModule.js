import React from 'react'
import ReactPlayer from 'react-player'

const VideoModule = ({ content }) => {
  return (
    <div className='video-module-container'>
      <div className='hero-video-container'>
        <ReactPlayer
          url={content.videoLink}
          controls
          width={'100%'}
          height={'100%'}
        ></ReactPlayer>
      </div>
      <p className='figcaption'>{content.videoCaption}</p>
    </div>
  )
}

export default VideoModule
