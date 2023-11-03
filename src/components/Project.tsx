import * as React from 'react'

interface ProjectProps {
  name: string,
  startDate: string,
  endDate: string,
  introduction: string,
  url: string,
  domain: string
}

const Project = ({name, startDate, endDate, introduction, url, domain}: ProjectProps) => {
  return (
    <div className="project">
      <h2>{name}</h2>
      <p className="project__infos">{startDate} — {endDate}</p>
      <p>{introduction}</p>
      <div className="project__pictures">
        <div className="project__picture"></div>
        <div className="project__picture"></div>
        <div className="project__picture"></div>
        <a className="project__link" href={url} target="_blank" rel="noopener noreferrer">
          Visiter <span className='project__link__url'>{domain}</span>
        </a>
      </div>
    </div>
  )
}

export default Project
