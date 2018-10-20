import React from 'react'
import styled from 'styled-components'
import Content from './Content'
import faqs from '../data/faqs'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`

const Question = styled.h3`
  margin-bottom: 0.5em;
  font-weight: bold;
`

const Answer = styled.div``

export default class extends React.PureComponent {
  render() {
    return (
      <Content title="FAQs">
        <Grid>
          {faqs.map(item => (
            <div key={item.question}>
              <Question>{item.question}</Question>
              <Answer>{item.answer}</Answer>
            </div>
          ))}
        </Grid>
      </Content>
    )
  }
}
