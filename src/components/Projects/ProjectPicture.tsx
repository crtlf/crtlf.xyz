import * as React from 'react'
import * as styles from './project.module.scss'
import { OutboundLink } from "gatsby-plugin-google-gtag"

interface ImageProps {
  url: string,
  alt: string,
  copyright?: string
}

interface ProjectPictureProps {
  image: ImageProps,
  url: string,
  copyright?: string
}

const ProjectPicture = ({image, url, copyright}: ProjectPictureProps) => {
  return (
    <div className={styles.picture} data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="500">
      <img src={image.url} alt={image.alt} />
      {
        image.copyright && (
          <OutboundLink className="project__copyright" href={url} target="_blank">© {copyright}</OutboundLink>
        )
      }
    </div>
  )
}

export default ProjectPicture
