import React from 'react'
import { Link } from 'gatsby'

const ProjectList = ({ projects }) => {
  return (
    <div className='home-container-list'>
      <div className='project-list-header'>
        <button className='project-list-header-btn'>Project</button>
        <button className='project-list-header-btn'>Year</button>
        <button className='project-list-header-btn'>Tag</button>
        <button className='project-list-header-btn'>Type</button>
      </div>
      {projects.map((project) => (
        <Link key={project.id} to={`/${project.slug}`} className='project-list-row'>
          <div>{project.title}</div>
          <div>{project.year}</div>
          <div>{project.metadata?.tags[0]?.name}</div>
          <div>{project.category}</div>
        </Link>
      ))}
    </div>
  )
}

export default ProjectList
