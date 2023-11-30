import React from 'react'

const BodyTextModule = ({ content }) => {
  return (
    <div
      className='module-text-container'
      dangerouslySetInnerHTML={{
        __html: content.text.childMarkdownRemark.html,
      }}
    ></div>
  )
}

export default BodyTextModule
