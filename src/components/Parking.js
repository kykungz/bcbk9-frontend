import React from 'react'
import styled from 'styled-components'

import Content from './Content'
import PrimaryBtn from './PrimaryBtn'

import options from '../data/parking'

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
    margin-bottom: 10px;
  }
`
const Options = styled.div`
  position: relative;
  float: left;
  width: 50%;
  margin-left: 7%;
  @media (max-width: 650px) {
    width: 80%;
    margin-left: 10px;
  }
`
const Row = styled.div`
  padding: 10px;
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
    right: 100%;
    margin-top: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: transparent rgba(0, 0, 0, 0.5) transparent transparent;
  }
  @media (max-width: 650px) {
    padding: 10px 10px;
    font-size: 14px;
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
        {options[type].map((option, idx) => (
          <Option key={idx}>
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
      <Row
        onMouseOut={() => this.changeView('')}
        className={
          type == 'paid' && this.state.view && this.state.view != type
            ? 'hidden'
            : ''
        }
      >
        <PrimaryBtn
          full
          onMouseOver={() => this.changeView(type)}
          onClick={() => this.changeView(type)}
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
