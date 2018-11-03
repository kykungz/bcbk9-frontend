import React from 'react'
import styled from 'styled-components'
import { SocialIcon } from 'react-social-icons'
import Popover from 'react-popover'

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
    transition: all 300ms;
    :hover {
      filter: brightness(1.1);
    }
  }

  @media (max-width: 650px) {
    display: none;
  }
`
const PopContainer = styled.span`
  padding: 0.5em;
  background-color: black;
  color: white;
  border-radius: 0.25em;
`
const body = url => <PopContainer>{url}</PopContainer>
export default () => {
  return (
    <SocialBar>
      <Popover
        isOpen={true}
        body={body('facebook.com/barcampbangkhen')}
        preferPlace="end"
      >
        <SocialIcon url="https://facebook.com/barcampbangkhen" />
      </Popover>
      <Popover
        isOpen={true}
        body={body('https://twitter.com/barcampbangkhen')}
        preferPlace="end"
      >
        <SocialIcon url="twitter.com/barcampbangkhen" />
      </Popover>
      <Popover
        isOpen={true}
        body={body('info@barcampbangkhen.org')}
        preferPlace="end"
      >
        <SocialIcon url="mailto:info@barcampbangkhen.org" />
      </Popover>
    </SocialBar>
  )
}
