import React from 'react'
import NavBar from '../components/NavBar'
import Location from '../components/Location'
import Content from '../components/Content'
import Logo from '../components/Logo'
import Parking from '../components/Parking'
import styled from 'styled-components'
import content from '../data/content'
import Sponsors from '../components/Sponsor'

const Container = styled.div`
  padding: 1em;
  margin: 0 auto;
  margin-top: 3em;
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
          {content.map((c, cidx) => (
            <Content title={c.title} key={cidx}>
              {c.text.map((t, tidx) => (
                <p key={cidx + '_' + tidx}>{t}</p>
              ))}
            </Content>
          ))}
          <Location />
          <Parking />
        </Container>
        <Sponsors />
      </div>
    )
  }
}

export default Home
