import React, { Component } from 'react'
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
export default class extends Component {
  state = {
    isOpen: [false, false, false],
  }
  onActive = (index, value) => () => {
    let isOpen = this.state.isOpen
    isOpen[index] = value
    this.setState({ isOpen })
  }
  render = () => {
    return (
      <SocialBar>
        <Popover
          isOpen={this.state.isOpen[0]}
          body={body('facebook.com/barcampbangkhen')}
          preferPlace="end"
        >
          <SocialIcon
            onMouseOver={this.onActive(0, true)}
            onMouseOut={this.onActive(0, false)}
            url="https://facebook.com/barcampbangkhen"
          />
        </Popover>
        <Popover
          isOpen={this.state.isOpen[1]}
          body={body('https://twitter.com/barcampbangkhen')}
          preferPlace="end"
        >
          <SocialIcon
            onMouseOver={this.onActive(1, true)}
            onMouseOut={this.onActive(1, false)}
            url="twitter.com/barcampbangkhen"
          />
        </Popover>
        <Popover
          isOpen={this.state.isOpen[2]}
          body={body('info@barcampbangkhen.org')}
          preferPlace="end"
        >
          <SocialIcon
            onMouseOver={this.onActive(2, true)}
            onMouseOut={this.onActive(2, false)}
            url="mailto:info@barcampbangkhen.org"
          />
        </Popover>
      </SocialBar>
    )
  }
}
