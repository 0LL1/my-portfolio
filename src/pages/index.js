import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { GlobalStyle, Body, TitleBar } from '../components/styles'
import Contact from '../components/contact'
import Header from '../components/header'
import Project from '../components/project'
import About from '../components/about'
import SEO from '../components/seo'

export default ({ data }) => {
  return (
    <Body>
      <SEO
        title="Olli Rautiainen"
        keywords={[
          'portfolio',
          'web developer',
          'web development',
          'front-end',
          'javascript',
          'react',
          'helsinki',
          'suomi',
          'finland',
        ]}
      />
      <GlobalStyle />
      <Contact />
      <Header
        image={
          <Img
            fluid={data.profilePicture.childImageSharp.fluid}
            alt="picture of me"
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
            alt="picture of f-board"
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
            alt="picture of My new tab"
          />
        }
      />
      <TitleBar>about</TitleBar>
      <About />
      <Contact />
    </Body>
  )
}

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 821) {
        ...GatsbyImageSharpFluid_noBase64
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
