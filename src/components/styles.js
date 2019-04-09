import styled, { createGlobalStyle } from 'styled-components/macro'

const colors = {
  light: '#ffffff',
  dark: '#000000',
  transparent: 'rgba(127, 127, 127, 0.5)',
  highlight: '#fc0fc0',
}

export const GlobalStyle = createGlobalStyle`
      html {
        background-color: ${colors.dark};
        font-size: 16px;
        overflow-x: hidden;
      }
      a {
        text-decoration: none;
      }
    `

export const Body = styled.div`
  display: grid;
  width: 100vw;
  color: ${colors.light};
  grid-template-columns: 38.2vw 61.8vw;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`

export const Title = styled.h1`
  color: ${colors.highlight};
  font-size: 10rem;
  text-align: center;
  margin: 0 0.5rem 0 0;
  z-index: 1;
  grid-column: 1 / -1;
  grid-row: 1 / 3;
`

export const Name = styled.h1`
  font-size: 20rem;
  transform: rotate(-90deg);
  transform-origin: right bottom;
  position: absolute;
  top: -20rem;
  right: -2.8rem;
`

export const Phrase = styled.div`
  position: absolute;
  left: 0.5rem;
  top: 1rem;
  font-size: 2rem;
  color: ${colors.highlight};
  line-height: 0;
`

export const StickyTitle = styled.h1`
  justify-self: end;
  align-self: start;
  color: ${props => (props.light ? colors.light : colors.dark)};
  font-size: 5rem;
  transform: rotate(-90deg);
  transform-origin: right top;
  position: sticky;
  top: 1rem;
  margin-right: 4.8rem;
  margin-top: 1rem;
  margin-bottom: 10rem;
`

export const Link = styled.a`
  text-decoration: none;
  font-size: 2rem;
  margin: 0 0.5rem;
  color: ${colors.transparent};
  :hover {
    color: ${colors.highlight};
  }
`

export const LinkButton = styled.a`
  text-decoration: none;
  text-align: center;
  font-size: 2rem;
  margin: 1rem;
  background-color: ${colors.highlight};
  color: ${colors.light};
  z-index: 1;
  transition: all ease-in-out 175ms;
  :hover {
    transform: translateY(-5px);
  }
`

export const Img = styled.img`
  width: 70%;
  grid-column: 1 / 5;
  grid-row: 1 / 5;
  transform-origin: top right;
  transform: rotate(-8deg);
`

export const Description = styled.p`
  grid-column: 1 / 5;
  grid-row: 3 / 4;
  width: 20rem;
  padding: 1rem;
  background-color: ${colors.dark};
  font-size: 1.5rem;
  z-index: 1;
`

export const StyledHeader = styled.div`
  min-height: 100vh;
  width: 38.2vw;
  grid-column: 1 / 2;
  background-color: ${colors.dark};
  position: fixed;

  @media (max-width: 1000px) {
    position: static;
  }
`

export const Works = styled.div`
  grid-column: 2 / 3;
  display: grid;
  grid-template-rows: 0 1fr 1fr;
`

export const StyledProject = styled.div`
  height: 100vh;
  width: 100%;
  padding: 1rem;
  background-color: ${colors.light};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  border-bottom: dotted 0.5rem ${colors.transparent};
  :last-child {
    border: none;
  }
`

export const StyledAbout = styled.div`
  min-height: 100vh;
  font-size: 1.5rem;
  line-height: 1;
  margin-left: 1rem;
  grid-column: 2 / 3;
  display: grid;
  grid-template-rows: 0 1fr;
  background-color: ${colors.dark};
  ul {
    list-style: disc;
  }
  li {
  }
  p {
    font-size: 2rem;
    padding: 0rem 5rem 3rem 1rem;
    color: ${colors.highlight};
  }
`

export const List = styled.ul`
  padding: 1rem 5rem 1rem 1rem;
`

export const Icons = styled.div`
  display: flex;
  position: fixed;
  bottom: 0rem;
  left: 0rem;
`
