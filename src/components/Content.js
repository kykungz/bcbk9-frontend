import React from 'react'
import styled from 'styled-components'

import line05 from '../assets/line05.png'
const Section = styled.div`
  margin-bottom: 0px;
  background: url(${line05}) no-repeat top left;
  background-size: 28px;

  @media (max-width: 650px) {
    background-size: 26px;
  }
`
const STitle = styled.h3`
  font-size: 28px;
  text-transform: uppercase;
  margin: 0;
  margin-left: 55px;
  @media (max-width: 650px) {
    font-size: 24px;
    margin-left: 45px;
  }
`
const SContent = styled.div`
  margin-left: 55px;
  padding-top: 15px;
  padding-bottom: 50px;

  p {
    text-indent: 2em;
  }
  @media (max-width: 650px) {
    font-size: 14px;

    margin-left: 45px;
    padding-top: 5px;
    p {
      text-indent: 0;
    }
  }
`
const Content = props => (
  <Section>
    <STitle>{props.title}</STitle>
    <SContent className="SContent">{props.children}</SContent>
  </Section>
)

export default Content
