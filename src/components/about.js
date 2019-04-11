import React from 'react'
import { StyledAbout, List } from '../components/styles'

const About = () => {
  return (
    <StyledAbout>
      <List>
        <li>born in 1988</li>
        <li>live in Helsinki</li>
        <li>
          Master of Arts from University of Helsinki
          <ul>
            <li>major: musicology </li>
            <li>minors: aesthetics and art history</li>
          </ul>
        </li>
        <li>work experience in fields of culture and arts</li>
        <li>
          found a passion for programming in 2017 and since been on this self
          learning path
        </li>
        <li>
          after learning the basics, I've been focusing on modern front-end
          technologies
        </li>
        <li>
          I'm comfortable with:
          <ul>
            <li>
              JavaScript
              <ul>
                <li>ES6+</li>
                <li>React</li>
                <li>create-react-app</li>
                <li>Gatsby</li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>
              CSS
              <ul>
                <li>responsive and adaptive design</li>
                <li>layouts using grid and flexbox</li>
                <li>CSS-in-JS</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          I'm most interested in learning:
          <ul>
            <li>GraphQL</li>
            <li>TypeScript</li>
            <li>testing</li>
            <li>Apollo</li>
            <li>Next</li>
          </ul>
        </li>
        <li>
          all in all, I like to keep myself up to date with current best
          practices, whatever they are
        </li>
        <li>
          I nurture my mind and body with music, chess, bodyweight training,
          running, cycling, hiking, swimming etc.
        </li>
      </List>
      <p>
        Most importantly: I'm looking for my first full-time position in the
        industry, so contact me if you're interested!
      </p>
    </StyledAbout>
  )
}

export default About
