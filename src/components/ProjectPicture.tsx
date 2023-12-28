import * as React from 'react'

interface ImageProps {
  url: string,
  alt: string,
  copyright?: boolean
}

interface ProjectPictureProps {
  image: ImageProps,
  url: string,
  name: string
}

const ProjectPicture = ({image, url, name}: ProjectPictureProps) => {
  return (
    <div className="project__picture" data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="500">
      <img src={image.url} alt={image.alt} />
      {
        image.copyright && (
          <a className="project__copyright" href={url} target="_blank">© {name}</a>
        )
      }
    </div>
  )
}

export default ProjectPicture
