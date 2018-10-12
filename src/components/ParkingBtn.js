import React from 'react'
import styled from 'styled-components'

import parking_button from '../assets/parking_button.png'
const Button = styled.div`
  cursor: pointer;
  background: url(${parking_button}) no-repeat center;
  background-size: contain;
  width: 321px;
  height: 92px;
  color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;

  font-family: 'Century Gothic', 'Prompt';
  font-weight: bold;
  font-size: 48px;
`
class ParkingBtn extends React.Component {
  constructor(props) {
    super(props)
    switch (props.size) {
      case 'small':
        this.style = { width: '161px', height: '46px', fontSize: '24px' }
        break
      default:
        this.style = {
          width: props.width + 'px',
          height: props.height + 'px',
          fontSize: props.fontSize + 'px',
        }
    }
  }
  render() {
    return <Button style={this.style}>{this.props.children}</Button>
  }
}

export default ParkingBtn
