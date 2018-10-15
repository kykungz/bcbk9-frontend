import React from 'react'
import styled from 'styled-components'

import Content from '../components/Content'

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
