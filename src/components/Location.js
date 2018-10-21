import React from 'react'
import styled from 'styled-components'
import { Zoom } from 'react-reveal'
import Line from './Line'

const Map = styled.iframe`
  width: 100%;
  height: 360px;
  border: none;
  margin: 1em auto;
`

const Title = styled.h1`
  font-size: 28px;
  margin: 60px 0 0 150px;
`

const StyledLine = styled(Line)`
  transform: rotate(-60deg);
`

export default () => (
  <div>
    <StyledLine length="116" top="72" right="54" topDot bottomDot />
    <Zoom>
      <Title>LOCATION</Title>
    </Zoom>
    <Zoom>
      <Map
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.8786118931484!2d100.56634103564576!3d13.84632421925175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ce74be3ff67%3A0x740d29058aa90dcc!2sDepartment+of+Computer+Engineering%2C+Kasetsart+University!5e0!3m2!1sen!2sth!4v1539427242601"
        frameborder="0"
      />
    </Zoom>
  </div>
)
