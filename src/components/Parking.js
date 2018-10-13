import React from 'react'
import styled from 'styled-components'

import Content from './Content'
import PrimaryBtn from './PrimaryBtn'

const ParkingTypes = styled.div`
  position: relative;
  float: left;
  width: 30%;
  @media (max-width: 650px) {
    width: 100%;
    display: inline-block;
    .hidden {
      display: none;
    }
  }
`
const Options = styled.div`
  position: relative;
  float: left;
  width: 50%;
  margin-left: 7%;
  @media (max-width: 650px) {
    width: 80%;
    display: inline-block;
    margin-left: 10px;
  }
`
const Row = styled.div`
  padding-bottom: 30px;

  @media (max-width: 650px) {
    width: 50%;
    padding-bottom: 10px;
  }
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
  max-width: 250px;
  color: white;
  font-size: 16px;
  border-radius: 10px;
  padding: 20px 15px;
  &::after {
    content: ' ';
    position: absolute;
    top: ${props => props.top};
    right: 100%; /* To the left of the tooltip */
    margin-top: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: transparent rgba(0, 0, 0, 0.5) transparent transparent;
  }
  @media (max-width: 650px) {
    padding: 10px 10px;
    max-width: none;
    &::after {
      top: initial;
      right: initial;
      bottom: 100%;
      left: 25%;
      margin-left: -10px;
      border-color: transparent transparent rgba(0, 0, 0, 0.5) transparent;
    }
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
      <Tooltip top={type == 'free' ? '25%' : '130px'}>
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
  changeView(type) {
    this.setState({ view: type })
  }
  ParkingType(type) {
    return (
      <Row onMouseOut={() => this.changeView('')}>
        <PrimaryBtn
          full
          onMouseOver={() => this.changeView(type)}
          onClick={() => this.changeView(type)}
          className={
            type == 'paid' && this.state.view && this.state.view != type
              ? 'hidden'
              : ''
          }
        >
          {type}
        </PrimaryBtn>
      </Row>
    )
  }
  render() {
    return (
      <Content title="Parking">
        <ParkingTypes>
          {this.ParkingType('free')}
          {this.ParkingType('paid')}
        </ParkingTypes>
        <Options>{this.getOptions(this.state.view)}</Options>
        <Spacer />
      </Content>
    )
  }
}
export default Parking
