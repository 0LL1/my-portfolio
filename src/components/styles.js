import styled, { createGlobalStyle } from 'styled-components/macro'
import me from '../images/me.jpg'
// import fBoard from '../images/f-board.jpg'
import myNewTab from '../images/my-new-tab.jpg'

const colors = {
  light: '#ffffff',
  dark: '#111111',
  grey: '#A8ABAF',
  apps: '#282C30',
  background: '#323639',
  green: '#29CF42',
  red: '#FF564F',
  yellow: '#FFC12F',
}

export const Title = styled.h1`
  font-weight: 700;
  font-size: 2rem;
  text-transform: uppercase;
  text-align: right;
  margin: 0 0.5rem 0 0;
  transform: rotate(7deg);
`

export const Link = styled.a`
  text-decoration: none;
  font-size: 2rem;
  margin: 0 0.5rem 0 0.5rem;
  color: ${colors.light};
`

export const Description = styled.p`
  padding: 5rem;
`

export const GlobalStyle = createGlobalStyle`
  html {
    background-color: ${colors.background};
  }
  a {
    text-decoration: none;
  }
`

export const Body = styled.div`
  display: grid;
  width: 100vw;
  color: ${colors.light};
  grid-template-columns: 1fr 2fr;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`

export const Header = styled.div`
  display: grid;
  grid-template-rows: repeat(9, 1fr);
  margin: 0;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(
      to right,
      rgba(255, 0, 0, 0),
      33%,
      ${colors.dark}
    ),
    url(${me});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: auto;
  /* h1 {
    font-weight: 700;
    font-size: 2rem;
    text-transform: uppercase;
    text-align: right;
    margin: 0 0.5rem 0 0;
    transform: rotate(7deg);
  } */
`

export const Icons = styled.div`
  display: flex;
  align-self: flex-start;
  justify-content: flex-start;
  margin: 0.5rem 0 0 0;
  a {
    font-size: 2rem;
    margin: 0 0.5rem 0 0.5rem;
    color: ${colors.light};
  }
`

export const StyledProject = styled.div`
  display: grid;
  background-image: linear-gradient(
      to right,
      rgba(255, 0, 0, 0),
      33%,
      ${colors.dark}
    ),
    url(${myNewTab});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: auto;
`
