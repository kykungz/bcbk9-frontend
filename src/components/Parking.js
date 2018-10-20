import React from 'react'
import styled from 'styled-components'
import Content from './Content'
import options from '../data/parking'

const Options = styled.div`
  position: relative;
  float: left;
  margin: 15px auto 15px 7%;
  @media (max-width: 650px) {
    width: 80%;
    margin-left: 10px;
  }
`

const OptionContainer = styled.div`
  display: flex;
  width: 500px;
  background: linear-gradient(
    35deg,
    rgba(192, 77, 105, 0.5) 0%,
    rgba(243, 157, 132, 0.5) 70%
  );
  border-radius: 16px;
  margin: 10px 0;
  ${Options} {
    width: 340px;
    margin-right: 50px;
  }
`

const Price = styled.h3`
  margin-top: 40px;
`

const OptionName = styled.h3`
  margin: 0;
`
const Option = styled.div`
  margin-bottom: 10px;
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
          <Options>
            <Option>
              <OptionName>{option.name}</OptionName>
              Location: {option.location}
              <br />
              Capacity: {option.capacity}
            </Option>
          </Options>
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
      <Content title="Parking">
        {this.getOptions('free', 0)}
        {this.getOptions('paid', 0)}
        {this.getOptions('paid', 1)}
      </Content>
    )
  }
}
export default Parking
