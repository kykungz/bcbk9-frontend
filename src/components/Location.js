import React from 'react'
import styled from 'styled-components'

const Map = styled.iframe`
  width: 100%;
  height: 360px;
  border: none;
  margin: 2em auto;
`

export default () => (
  <Map
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.8786118931484!2d100.56634103564576!3d13.84632421925175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ce74be3ff67%3A0x740d29058aa90dcc!2sDepartment+of+Computer+Engineering%2C+Kasetsart+University!5e0!3m2!1sen!2sth!4v1539427242601"
    frameborder="0"
  />
)
