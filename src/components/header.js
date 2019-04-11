import React from 'react'
import { StyledHeader, HeaderText, ImageContainer } from '../components/styles'

const Header = ({ image }) => {
  return (
    <StyledHeader>
      <HeaderText>
        <p>Hi, I'm</p>
        <h1>Olli Rautiainen</h1>
        <p>and I love</p>
        <h1>web development</h1>
      </HeaderText>
      <ImageContainer>{image}</ImageContainer>
    </StyledHeader>
  )
}

export default Header
