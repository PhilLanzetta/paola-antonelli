import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const ProjectGrid = ({projects}) => {
  return (
    <div className='home-container'>
      {projects.map((project) => {
        const { title, category, featuredImage, metadata, slug, id } = project
        return (
          <Link className='project-card' key={id} to={`/${slug}`}>
            <div className='project-card-content'>
              <div className='project-card-img-container'>
                <GatsbyImage
                  className='project-card-img'
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
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default ProjectGrid