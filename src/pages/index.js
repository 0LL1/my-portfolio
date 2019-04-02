import React from 'react'
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaRegEnvelope,
  FaRegHeart,
} from 'react-icons/fa'
import {
  GlobalStyle,
  Body,
  Header,
  Icons,
  Title,
  Link,
} from '../components/styles'
import Project from '../components/project'

export default () => {
  return (
    <Body>
      <GlobalStyle />
      <Header>
        <Icons>
          <Link
            href="https://github.com/0LL1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/olli-rautiainen-8a662111b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://twitter.com/__0LL1__"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </Link>
          <Link
            href="mailto:o.a.h.rautiainen@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaRegEnvelope />
          </Link>
        </Icons>
        <Title>Hi! I'm</Title>
        <Title>Olli</Title>
        <Title>and</Title>
        <Title>I</Title>
        <Title>
          <FaRegHeart style={{ verticalAlign: 'middle' }} />
        </Title>
        <Title>web</Title>
        <Title>development</Title>
      </Header>
      <Project
        title="f-board"
        description="Progressive web application for visualizing string instruments' fingerboard patterns."
        code="https://github.com/0LL1/f-board"
        demo="https://f-board.netlify.com/"
        image="fBoard"
      />
      <Project
        title="My new tab"
        description="Chrome extension containing four little widgets for my daily needs."
        code="https://github.com/0LL1/my-new-tab"
        demo="hhttps://mynewtab.netlify.com/"
        image="myNewTab"
      />
    </Body>
  )
}
