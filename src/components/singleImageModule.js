import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'

const SingleImageModule = ({ content }) => {
  const { image, margin } = content
  return (
    <div className={margin}>
      <figure>
        <GatsbyImage
          image={image.image.gatsbyImageData}
          alt={image.image.description}
        ></GatsbyImage>
        <figcaption>{image.caption}</figcaption>
      </figure>
    </div>
  )
}

export default SingleImageModule
