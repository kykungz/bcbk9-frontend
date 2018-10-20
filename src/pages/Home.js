import React from 'react'
import Sponsors from '../components/Sponsors'
import NavBar from '../components/NavBar'
import Location from '../components/Location'
import Content from '../components/Content'
import Logo from '../components/Logo'
import styled from 'styled-components'
import content from '../data/content'

const Container = styled.div`
  padding: 1em;
  margin: 0 auto;
  max-width: 960px;
  @media (max-width: 650px) {
    padding: 0;
  }
`

class Home extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Logo />
        <Container>
          <Location />
          {content.map((c, cidx) => (
            <Content title={c.title} key={cidx}>
              {c.text.map((t, tidx) => (
                <p key={cidx + '_' + tidx}>{t}</p>
              ))}
            </Content>
          ))}
          <Sponsors />
        </Container>
      </div>
    )
  }
}

export default Home
