import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaRegEnvelope } from 'react-icons/fa'
import { StyledHeader, Icons, Name, Phrase, Link } from '../components/styles'

const Header = () => {
  return (
    <StyledHeader>
      <Name>Olli</Name>
      <Phrase>
        <p>web</p>
        <p>development</p>
        <p>with</p>
        <p>passion</p>
      </Phrase>
      <Icons>
        <Link
          href="https://github.com/0LL1"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </Link>
        <Link
          href="https://www.linkedin.com/in/olli-rautiainen-8a662111b/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </Link>
        <Link
          href="https://twitter.com/__0LL1__"
          aria-label="Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </Link>
        <Link
          href="mailto:o.a.h.rautiainen@gmail.com"
          aria-label="Email me"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaRegEnvelope />
        </Link>
      </Icons>
    </StyledHeader>
  )
}

export default Header
