import React from 'react'
import styled from 'styled-components'

import './Content.scss'
import line05 from '../assets/line05.png'
const Section = styled.div`
  margin-bottom: 0px;
  background: url(${line05}) no-repeat top left;
  background-size: 28px;
`
const STitle = styled.h3`
  font-family: 'Century Gothic', 'Prompt';
  font-size: 28px;
  text-transform: uppercase;
  margin: 0;
  margin-left: 60px;
`
const SContent = styled.div`
  font-family: 'Century Gothic', 'Prompt';
  margin-left: 60px;
  padding-top: 15px;
  padding-bottom: 50px;
`
class Content extends React.Component {
  render() {
    return (
      <Section>
        <STitle>{this.props.title}</STitle>
        <SContent className="SContent">{this.props.children}</SContent>
      </Section>
    )
  }
}

export default Content
