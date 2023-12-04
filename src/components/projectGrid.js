import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const ProjectGrid = ({projects}) => {
  return (
    <div className='home-container'>
      {projects.map((project) => {
        const { title, category, featuredImage, metadata, slug, id } = project
        const imgWidth =
          (featuredImage.gatsbyImageData.width * 20) /
          featuredImage.gatsbyImageData.height
        return (
          <Link className='project-card' key={id} to={`/${slug}`}>
            <div className='project-card-img-container'>
              <GatsbyImage
                className='project-card-img'
                style={{ width: `${imgWidth}vw` }}
                image={featuredImage.gatsbyImageData}
                alt={featuredImage.description}
              ></GatsbyImage>
            </div>
            <div className='project-card-text'>
              <div>
                <p className='project-card-title'>{title}</p>
                <p>{metadata.tags[0]?.name}</p>
              </div>
              <button className='project-card-category'>{category}</button>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default ProjectGrid