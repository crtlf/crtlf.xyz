import * as React from 'react'
import ProjectPicture from './ProjectPicture'

interface ProjectProps {
  name: string,
  startDate: string,
  endDate: string,
  introduction: string,
  pictures: Array<ProjectPictureProps>,
  url: string,
  domain: string
}

interface ProjectPictureProps {
  url: string,
  alt: string
}

const Project = ({name, startDate, endDate, introduction, pictures, url, domain}: ProjectProps) => {
  return (
    <div className="project">
      <h2>{name}</h2>
      <p className="project__infos">{startDate} — {endDate}</p>
      <p>{introduction}</p>
      <div className="project__pictures">
        {pictures && pictures.map((image, index) => (
          <ProjectPicture key={index} image={image} />
        ))}
        <a className="project__link" href={url} target="_blank" rel="noopener noreferrer">
          Visiter <span className='project__link__url'>{domain}</span>
        </a>
      </div>
    </div>
  )
}

export default Project
