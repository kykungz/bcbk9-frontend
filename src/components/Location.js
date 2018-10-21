import React from 'react'
import styled from 'styled-components'
import { Zoom } from 'react-reveal'
import Line from './Line'

const Map = styled.iframe`
  width: 100%;
  height: 360px;
  border: none;
  margin: 2em auto;
`

const Title = styled.h1`
  font-size: 28px;
  margin: 60px 0 0 150px;
`

export default () => (
  <div>
    <Line rotate="r" length="120" top="85" right="48" topDot bottomDot />
    <Zoom>
      <Title>LOCATION</Title>
    </Zoom>
    <Zoom>
      <Map
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d516.4958529942247!2d100.5696961920409!3d13.846490263227853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ce0ba6b4eb7%3A0x2a0f9538c39c6511!2sIUP+International+Building+17!5e0!3m2!1sen!2sth!4v1540120842495"
        frameborder="0"
      />
    </Zoom>
  </div>
)
