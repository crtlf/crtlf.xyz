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
    <div className="project__picture">
      <img src={image.url} alt={image.alt} />
    </div>
  )
}

export default ProjectPicture
