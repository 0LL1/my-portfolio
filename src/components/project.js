import React from 'react'
import {
  Icons,
  Title,
  Link,
  Description,
  StyledProject,
} from '../components/styles'

const Project = ({ title, description, code, demo, image }) => {
  return (
    <StyledProject image={image}>
      <Title style={{ marginTop: '2rem' }}>{title}</Title>
      <Description>{description}</Description>
      <Icons>
        <Link href={code} target="_blank" rel="noopener noreferrer">
          code
        </Link>
        <Link href={demo} target="_blank" rel="noopener noreferrer">
          demo
        </Link>
      </Icons>
    </StyledProject>
  )
}

export default Project
