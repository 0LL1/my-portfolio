import React from 'react'
import { GlobalStyle, Body, Works, StickyTitle } from '../components/styles'
import Header from '../components/header'
import Project from '../components/project'
import About from '../components/about'

export default () => {
  return (
    <Body>
      <GlobalStyle />
      <Header />
      <Works>
        <StickyTitle>Works</StickyTitle>
        <Project
          title="f-board"
          description="Mobile friendly progressive web application for string instrumentalists. Visualize your fingerboard with any tuning and note combination."
          code="https://github.com/0LL1/f-board"
          demo="https://f-board.netlify.com/"
          image="f-board.jpg"
        />
        <Project
          title="My new tab"
          description="Chrome extension that overrides the default new tab page. It contains four individual widgets for my daily needs."
          code="https://github.com/0LL1/my-new-tab"
          demo="https://mynewtab.netlify.com/"
          image="my-new-tab.jpg"
        />
      </Works>
      <About />
    </Body>
  )
}
