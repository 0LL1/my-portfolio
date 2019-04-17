import React from 'react'
import { HeaderText, ImageContainer } from '../components/styles'

const Header = ({ image }) => {
  return (
    <>
      <HeaderText>
        <p>Hi, I'm</p>
        <h1>Olli Rautiainen</h1>
        <p>and I love</p>
        <h1>web development</h1>
      </HeaderText>
      <ImageContainer>{image}</ImageContainer>
    </>
  )
}

export default Header
