import React from 'react'
import styled from 'styled-components'
import { SocialIcon } from 'react-social-icons'

const SocialBar = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 99;
  a {
    margin-bottom: 5px;
    background: white;
    border-radius: 50%;
  }
  @media (max-width: 650px) {
    display: none;
  }
`

export default () => {
  return (
    <SocialBar>
      <SocialIcon url="https://facebook.com/barcampbangkhen" />
      <br />
      <SocialIcon url="https://twitter.com/barcampbangkhen" />
    </SocialBar>
  )
}
