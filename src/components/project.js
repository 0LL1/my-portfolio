import React from 'react'
import {
  ProjectText,
  ImageContainer,
  LinkButtons,
  StyledProject,
} from '../components/styles'

const Project = ({ title, description, code, demo, image }) => {
  return (
    <StyledProject>
      <ImageContainer>{image}</ImageContainer>
      <ProjectText>
        <h1>{title}</h1>
        <p>{description}</p>
        <LinkButtons>
          <a href={code} target="_blank" rel="noopener noreferrer">
            code
          </a>
          <a href={demo} target="_blank" rel="noopener noreferrer">
            demo
          </a>
        </LinkButtons>
      </ProjectText>
    </StyledProject>
  )
}

export default Project
