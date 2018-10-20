import React from 'react'
import styled from 'styled-components'
import { Fade, Zoom } from 'react-reveal'

const Section = styled.div`
  margin: 0 1em;

  .circle {
    height: 25px;
    width: 25px;
    background-color: #a31f59;
    border-radius: 50%;
    display: inline-block;
  }
`

const STitle = styled.h3`
  display: inline-block;

  font-size: 28px;

  margin: 0;
  margin-top: -10px;
  margin-left: 30px;
  @media (max-width: 650px) {
    margin-left: 20px;
    font-size: 22px;
  }
`

const SContent = styled.div`
  padding: 15px 0 50px 40px;
  padding-bottom: 10px;

  margin-top: -8px;
  margin-left: 10px;
  margin-bottom: 1em;

  border-left: 5px dashed #a31f59;
  p {
    font-size: 20px;
  }

  @media (max-width: 650px) {
    padding-left: 30px;
    p {
      font-size: 18px;
      margin-top: 8px;
    }
  }
`
const Content = props => (
  <Section>
    <Zoom>
      <div className="circle" />
    </Zoom>
    <STitle>
      <Fade>{props.title}</Fade>
    </STitle>
    <Fade bottom>
      <SContent>{props.children}</SContent>
    </Fade>
  </Section>
)

export default Content
