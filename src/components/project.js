import React from 'react'
import { FaGithub, FaLink } from 'react-icons/fa'
import { ProjectText, ImageContainer, LinkButtons } from '../components/styles'

const Project = ({ title, description, code, demo, image }) => {
  return (
    <>
      <ImageContainer>{image}</ImageContainer>
      <ProjectText>
        <h1>{title}</h1>
        <p>{description}</p>
        <LinkButtons>
          <a href={code} target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" /> code
          </a>
          <a href={demo} target="_blank" rel="noopener noreferrer">
            <FaLink className="icon" /> demo
          </a>
        </LinkButtons>
      </ProjectText>
    </>
  )
}

export default Project
