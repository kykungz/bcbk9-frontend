import React from 'react'
import styled from 'styled-components'

import Content from './Content'
import ParkingBtn from './ParkingBtn'

const Col = styled.div`
  position: relative;
  float: left;
  width: 50%;
`
const Spacer = styled.div`
  clear: both;
`
const Tooltip = styled.div`
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-family: 'Century Gothic', 'Prompt';
  font-size: 16px;
  border-radius: 10px;
  padding: 20px 15px;
  &::after {
    content: ' ';
    position: absolute;
    top: ${props => props.top}%;
    right: 100%; /* To the left of the tooltip */
    margin-top: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: transparent rgba(0, 0, 0, 0.5) transparent transparent;
  }
`
Tooltip.defaultProps = {
  top: 25,
}

const OptionName = styled.h3`
  margin: 0;
`

const options = {
  free: [
    {
      name: 'Rapee Sagarik Building',
      location: 'Behind Rapee Sagarik Building',
      capacity: 40,
    },
  ],
  paid: [
    {
      name: 'Ngam Wong Wan 1 Parking Building',
      location: 'Ngam Wong Wan 1 entrance',
      capacity: 289,
    },

    {
      name: 'Ngam Wong Wan 2 Parking Building',
      location: 'Ngam Wong Wan 2 entrance',
      capacity: 192,
    },
  ],
}

class Parking extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: '',
    }
  }
  handleButton(type) {
    this.setState({ view: type })
  }
  render() {
    let Options = ''
    if (this.state.view) {
      Options = (
        <Tooltip top={this.state.view == 'free' ? 25 : 75}>
          {options[this.state.view].map(option => (
            <div key={option.name}>
              <OptionName>{option.name}</OptionName>
              Location: {option.location}
              <br />
              Capacity: {option.capacity}
            </div>
          ))}
        </Tooltip>
      )
    }
    return (
      <div>
        <Content title="Parking" style={{ minHeight: '200px' }}>
          <Col style={{ width: '25%' }}>
            <div>
              <ParkingBtn
                size="small"
                onClick={() => this.handleButton('free')}
                onMouseOver={() => this.handleButton('free')}
                onMouseOut={() => this.handleButton('')}
              >
                Free
              </ParkingBtn>
            </div>
            <div>
              <ParkingBtn
                size="small"
                onClick={() => this.handleButton('paid')}
                onMouseOver={() => this.handleButton('paid')}
                onMouseOut={() => this.handleButton('')}
              >
                Paid
              </ParkingBtn>
            </div>
          </Col>
          <Col>{Options}</Col>
          <Spacer />
        </Content>
      </div>
    )
  }
}
export default Parking
