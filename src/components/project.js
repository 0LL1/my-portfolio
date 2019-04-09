import React from 'react'
import {
  Title,
  Img,
  LinkButton,
  Description,
  StyledProject,
} from '../components/styles'

const Project = ({ title, description, code, demo, image }) => {
  return (
    <StyledProject image={image}>
      <Title>{title}</Title>
      <Img src={require(`../images/${image}`)} alt={title} />
      <Description>{description}</Description>
      <LinkButton href={code} target="_blank" rel="noopener noreferrer">
        code
      </LinkButton>
      <LinkButton href={demo} target="_blank" rel="noopener noreferrer">
        demo
      </LinkButton>
    </StyledProject>
  )
}

export default Project
