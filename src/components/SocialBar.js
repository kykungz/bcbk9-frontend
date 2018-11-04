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
const SocialList = [
  ['https://facebook.com/barcampbangkhen', 'facebook.com/barcampbangkhen'],
  ['https://twitter.com/barcampbangkhen', 'twitter.com/barcampbangkhen'],
  ['mailto:info@barcampbangkhen.org', 'info@barcampbangkhen.org'],
]
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
        {SocialList.map(([url, name], index) => (
          <Popover
            isOpen={this.state.isOpen[index]}
            body={body(name)}
            preferPlace="end"
            enterExitTransitionDurationMs={300}
            key={index}
          >
            <SocialIcon
              onMouseOver={this.onActive(index, true)}
              onMouseOut={this.onActive(index, false)}
              url={url}
            />
          </Popover>
        ))}
      </SocialBar>
    )
  }
}
