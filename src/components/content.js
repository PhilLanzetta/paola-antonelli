import React from 'react'
import SingleImageModule from './singleImageModule'
import MultiImageModule from './multiImageModule'
import BodyTextModule from './bodyTextModule'
import VideoModule from './videoModule'

const Content = ({ content }) => {
  return (
    <div className='content-holder'>
      {content.map((item) => {
        if (item.singleImageId) {
          return (
            <SingleImageModule
              key={item.singleImageId}
              content={item}
            ></SingleImageModule>
          )
        } else if (item.multiImageId) {
          return (
            <MultiImageModule
              key={item.multiImageId}
              content={item}
            ></MultiImageModule>
          )
        } else if (item.bodyTextId) {
          return (
            <BodyTextModule
              key={item.bodyTextId}
              content={item}
            ></BodyTextModule>
          )
        } else if (item.videoModuleId) {
          return (
            <VideoModule key={item.videoModuleId} content={item}></VideoModule>
          )
        } else {
          return <div>Unknown Content Type</div>
        }
      })}
    </div>
  )
}

export default Content
