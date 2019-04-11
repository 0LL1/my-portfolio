import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaRegEnvelope } from 'react-icons/fa'
import { IconBar, IconLink } from './styles'

const Contact = () => {
  return (
    <IconBar>
      <IconLink
        href="https://github.com/0LL1"
        aria-label="GitHub"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="icon" />
      </IconLink>
      <IconLink
        href="https://www.linkedin.com/in/olli-rautiainen-8a662111b/"
        aria-label="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="icon" />
      </IconLink>
      <IconLink
        href="https://twitter.com/__0LL1__"
        aria-label="Twitter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter className="icon" />
      </IconLink>
      <IconLink
        href="mailto:o.a.h.rautiainen@gmail.com"
        aria-label="Email"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaRegEnvelope className="icon" />
      </IconLink>
    </IconBar>
  )
}

export default Contact
