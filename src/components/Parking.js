import React from 'react'
import styled from 'styled-components'
import Content from './Content'
import options from '../data/parking'

const Option = styled.div`
  position: relative;
  float: left;
  margin: 15px auto 15px 7%;
  @media (max-width: 650px) {
    margin-left: 10px;
  }
`

const OptionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 500px;
  padding: 15px;
  background: rgba(255, 157, 132, 0.2);
  border-radius: 16px;
  border: medium solid #c04d69;
  margin: 10px 0;
  ${Option} {
    max-width: 340px;
    margin-right: 20px;
  }
  * {
    margin: auto;
  }
`

const Price = styled.h3`
  justify-content: center;
  padding: 10px 0;
`

const OptionName = styled.h3`
  margin: 0;
`

class Parking extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: '',
    }
  }
  getOptions(type, index) {
    const option = options[type][index]
    const color = type === 'free' ? 'green' : 'red'
    return (
      <div style={{ display: 'flex' }}>
        <OptionContainer>
          <Option>
            <OptionName>{option.name}</OptionName>
            Location: {option.location}
            <br />
            Capacity: {option.capacity}
          </Option>
          <Price style={{ color }}>{type.toUpperCase()}</Price>
        </OptionContainer>
      </div>
    )
  }
  changeView(type) {
    this.setState({ view: type })
  }
  render() {
    return (
      <Content title="PARKING">
        {this.getOptions('free', 0)}
        {this.getOptions('paid', 0)}
        {this.getOptions('paid', 1)}
      </Content>
    )
  }
}
export default Parking
