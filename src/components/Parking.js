import React from 'react'
import styled from 'styled-components'

import Content from './Content'
import PrimaryBtn from './PrimaryBtn'

const Col = styled.div`
  position: relative;
  float: left;
  width: 50%;
`
const Row = styled.div`
  margin-bottom: 10px;
`
const Spacer = styled.div`
  clear: both;
`

const OptionName = styled.h3`
  margin: 0;
`
const Option = styled.div`
  margin-bottom: 10px;
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
Tooltip.defaultProps = { top: 25 }

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
  getOptions(type) {
    return options[type] ? (
      <Tooltip top={type == 'free' ? 25 : 60}>
        {options[type].map(option => (
          <Option key={option.name}>
            <OptionName>{option.name}</OptionName>
            Location: {option.location}
            <br />
            Capacity: {option.capacity}
          </Option>
        ))}
      </Tooltip>
    ) : null
  }
  handleButton(type) {
    this.setState({ view: type })
  }
  ParkingType(type) {
    return (
      <Row>
        <PrimaryBtn
          full
          onClick={() => this.handleButton(type)}
          onMouseOver={() => this.handleButton(type)}
          onMouseOut={() => this.handleButton('')}
        >
          {type}
        </PrimaryBtn>
      </Row>
    )
  }
  render() {
    return (
      <div>
        <Content title="Parking">
          <Col>
            {this.ParkingType('free')}
            {this.ParkingType('paid')}
          </Col>
          <Col>{this.getOptions(this.state.view)}</Col>
          <Spacer />
        </Content>
      </div>
    )
  }
}
export default Parking
