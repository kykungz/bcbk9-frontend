import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  margin: 0 1em;

  .circle {
    height: 25px;
    width: 25px;
    background-color: #a31f59;
    border-radius: 50%;
    display: inline-block;
  }

  @media (max-width: 650px) {
    .circle {
      height: 20px;
      width: 20px;
    }
  }
`

const STitle = styled.h3`
  display: inline-block;

  font-size: 28px;
  text-transform: uppercase;

  margin: 0;
  margin-top: -10px;
  margin-left: 30px;
  @media (max-width: 650px) {
    font-size: 24px;
  }
`

const SContent = styled.div`
  padding: 15px 0 50px 40px;

  margin-top: -8px;
  margin-left: 10px;
  border-left: 5px dashed #a31f59;
  p {
    text-indent: 2em;
    font-size: 20px;
  }
  @media (max-width: 650px) {
    font-size: 14px;

    padding-top: 5px;
    margin-left: 8px;
    p {
      text-indent: 0;
    }
  }
`
const Content = props => (
  <Section>
    <div className="circle" />
    <STitle>{props.title}</STitle>
    <SContent>{props.children}</SContent>
  </Section>
)

export default Content
