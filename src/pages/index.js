import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { GlobalStyle, Body, Header, Icons } from '../components/styles'

export default () => {
  return (
    <Body>
      <GlobalStyle />
      <Header>
        <Icons>
          <a href="https://github.com/0LL1">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/olli-rautiainen-8a662111b/">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/__0LL1__">
            <FaTwitter />
          </a>
        </Icons>
        <h1>Hi!</h1>
        <h1>I'm</h1>
        <h1>Olli</h1>
        <h1>and</h1>
        <h1>I</h1>
        <h1>love</h1>
        <h1>web</h1>
        <h1>development</h1>
      </Header>
    </Body>
  )
}
