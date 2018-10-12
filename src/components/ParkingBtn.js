import React from 'react'
import styled from 'styled-components'

import parking_button from '../assets/parking_button.png'
const Button = styled.div`
  cursor: pointer;
  background: url(${parking_button}) no-repeat center;
  background-size: contain;
  width: 321px;
  height: 92px;
  margin: 10px;
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
  render() {
    let style = {}
    switch (this.props.size) {
      case 'small':
        style = { width: '161px', height: '46px', fontSize: '24px' }
        break
      case 'medium':
        style = { width: '242px', height: '69px', fontSize: '36px' }
        break
      default:
        break
    }
    return (
      <Button style={style} {...this.props}>
        {this.props.children}
      </Button>
    )
  }
}

export default ParkingBtn
