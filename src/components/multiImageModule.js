import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

const MultiImageModule = ({ content }) => {
  const { images, margin, style } = content
  const styleClass = style.split(' ').join('-')
  return (
    <div className={margin}>
      <div className={styleClass}>
        {images.map((image) => (
          <figure key={image.id}>
            <GatsbyImage
              image={image.image.gatsbyImageData}
              alt={image.image.description}
            ></GatsbyImage>
            <figcaption>{image.caption}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}

export default MultiImageModule
