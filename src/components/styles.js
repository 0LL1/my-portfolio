import styled, { createGlobalStyle } from 'styled-components'
import typography from '../utils/typography'

const rhythm = typography.rhythm

const colors = {
  light: '#ffffff',
  dark: '#111111',
  transparent: 'rgba(127, 127, 127, 0.5)',
  highlight: '#fc0fc0',
}

export const GlobalStyle = createGlobalStyle`
  html {
    background-color: ${colors.dark};
  }
  a {
   text-decoration: none;
    color: inherit;
  }
  .icon {
    vertical-align: -2px;
  }
`

export const Body = styled.div`
  max-width: ${rhythm(22)};
  margin: 0 auto;
  padding: ${rhythm(0.5)};
  background-color: ${colors.light};
  background-size: ${rhythm(0.5)} ${rhythm(0.5)};
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.1) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
`

export const StyledHeader = styled.div``

export const HeaderText = styled.div`
  text-align: center;
  margin: ${rhythm(1.5)} auto;
  p {
    line-height: ${rhythm(1)};
    margin: ${rhythm(0.5)} auto;
  }
  h1 {
    line-height: ${rhythm(1)};
    margin: ${rhythm(0.5)} auto;
  }
`

export const Bar = styled.div`
  width: 100%;
  height: ${rhythm(1)};
  background-color: ${colors.dark};
  color: ${colors.light};
`

export const IconBar = styled(Bar)`
  display: flex;
  padding: 0 ${rhythm(0.25)};
`

export const IconLink = styled.a`
  width: ${rhythm(1)};
  margin: 0 ${rhythm(0.25)};
  text-align: center;
  :hover {
    color: ${colors.highlight};
  }
`

export const ImageContainer = styled.div`
  max-width: 800px;
  transform: rotate(-8deg);
  margin: ${rhythm(1.5)} auto;
`

export const TitleBar = styled(Bar)`
  padding: 0 ${rhythm(0.5)};
`

export const StyledProject = styled.div`
  // border-bottom: solid 1px ${colors.dark};
  // :last-child {
  //   border: none;
  // }
`

export const ProjectText = styled(HeaderText)`
  p {
    text-align: left;
    max-width: ${rhythm(10)};
    margin: ${rhythm(1)} auto;
  }
`

export const LinkButtons = styled.div`
  margin: ${rhythm(1.5)} auto;
  a {
    // padding: 0 ${rhythm(1)};
    margin: 0 ${rhythm(0.5)};
    text-decoration: underline;
    color: ${colors.dark};
    :hover {
      color: ${colors.highlight};
    }
  }
`

export const StyledAbout = styled.div`
  margin: ${rhythm(1.5)} auto 0 auto;
  h3 {
    line-height: ${rhythm(1)};
  }
`

export const List = styled.ul`
  // padding: 1rem 5rem 1rem 1rem;
`
