import * as React from 'react'
import * as styles from './project.module.scss'
import ProjectPicture from './ProjectPicture'
import { OutboundLink } from "gatsby-plugin-google-gtag"

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
  alt: string,
  copyright?: string
}

const Project = ({name, startDate, endDate, introduction, pictures, url, domain}: ProjectProps) => {
  return (
    <div className={styles.project}>
      <h2 data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease" data-sal-duration="500">{name}</h2>
      <p className={styles.infos} data-sal="slide-up" data-sal-delay="500" data-sal-easing="ease" data-sal-duration="500">{startDate} — {endDate}</p>
      <p data-sal="slide-up" data-sal-delay="700" data-sal-easing="ease" data-sal-duration="500">{introduction}</p>
      <div className={styles.pictures}>
        {pictures && pictures.map((image, index) => (
          <ProjectPicture key={index} image={image} url={url} copyright={image.copyright} />
        ))}
        <OutboundLink className={styles.link} href={url} target="_blank" rel="noopener noreferrer">
          Visiter <span className={url}>{domain}</span>
        </OutboundLink>
      </div>
    </div>
  )
}

export default Project
