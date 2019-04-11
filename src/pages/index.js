import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { FaGithub, FaLinkedin, FaTwitter, FaRegEnvelope } from 'react-icons/fa'
import {
  GlobalStyle,
  Body,
  IconBar,
  IconLink,
  TitleBar,
} from '../components/styles'
import Header from '../components/header'
import Project from '../components/project'
import About from '../components/about'
import SEO from '../components/seo'

export default ({ data }) => {
  return (
    <Body>
      <SEO title="Olli Rautiainen" />
      <GlobalStyle />
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
      <Header
        image={
          <Img
            fluid={data.profilePicture.childImageSharp.fluid}
            style={{ borderRadius: '50%' }}
          />
        }
      />
      <TitleBar>works</TitleBar>
      <Project
        title="f-board"
        description="Mobile friendly progressive web application for string instrumentalists. Visualize your fingerboard with any tuning and note combination."
        code="https://github.com/0LL1/f-board"
        demo="https://f-board.netlify.com/"
        image={
          <Img
            fluid={data.fBoard.childImageSharp.fluid}
            style={{ borderRadius: '50%' }}
          />
        }
      />
      <Project
        title="My new tab"
        description="Chrome extension that overrides the default new tab page. It contains four individual widgets for my daily needs."
        code="https://github.com/0LL1/my-new-tab"
        demo="https://mynewtab.netlify.com/"
        image={
          <Img
            fluid={data.myNewTab.childImageSharp.fluid}
            style={{ borderRadius: '50%' }}
          />
        }
      />
      <TitleBar>about</TitleBar>
      <About />
    </Body>
  )
}

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 821) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    profilePicture: file(relativePath: { eq: "profile-picture.png" }) {
      ...fluidImage
    }
    fBoard: file(relativePath: { eq: "f-board.png" }) {
      ...fluidImage
    }
    myNewTab: file(relativePath: { eq: "my-new-tab.png" }) {
      ...fluidImage
    }
  }
`
