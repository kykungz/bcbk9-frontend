import React from 'react'
import styled from 'styled-components'

import Content from '../components/Content'

import content from '../data/content'

const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  max-width: 960px;
  @media (max-width: 650px) {
    width: 90%;
    max-width: initial;
  }
`

class Home extends React.Component {
  render() {
    return (
      <Container>
        {content.map((c, cidx) => (
          <Content title={c.title} key={cidx}>
            {c.text.map((t, tidx) => (
              <p key={cidx + '_' + tidx}>{t}</p>
            ))}
          </Content>
        ))}
      </Container>
    )
  }
}

export default Home
