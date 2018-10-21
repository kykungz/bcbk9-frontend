import React from 'react'
import styled from 'styled-components'
import { SocialIcon } from 'react-social-icons'

const SocialBar = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  bottom: 20px;
  left: 20px;
  z-index: 99;

  .social-svg {
    background: white;
  }
  a {
    margin-bottom: 0.5em;
  }

  @media (max-width: 650px) {
    display: none;
  }
`

export default () => {
  return (
    <SocialBar>
      <SocialIcon url="https://facebook.com/barcampbangkhen" />
      <SocialIcon url="https://twitter.com/barcampbangkhen" />
      <SocialIcon url="mailto:info@barcampbangkhen.org" />
    </SocialBar>
  )
}
