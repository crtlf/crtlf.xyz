import * as React from 'react'

interface ImageProps {
  url: string,
  alt: string
}

interface ProjectPictureProps {
  image: ImageProps,
}

const ProjectPicture = ({image}: ProjectPictureProps) => {
  return (
    <div className="project__picture" data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="500">
      <img src={image.url} alt={image.alt} />
    </div>
  )
}

export default ProjectPicture
