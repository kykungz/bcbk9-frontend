import React from 'react'
import styled from 'styled-components'
import Line from './Line'

const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
`
const Timing = styled.div`
  margin-top: 20px;
  text-align: right;
  margin-right: 10px;
`
const Event = styled.div`
  margin-top: 20px;
  text-align: left;
  margin-left: 30px;
`
const Peroid = styled.div`
  margin-bottom: 20px;
  @media (max-width: 480px) {
    font-size: 13px;
  }
`

const Timetable = props => {
  return (
    <Container>
      <Timing>
        <Peroid>09.00-10.00</Peroid>
        <Peroid>10.00-10.45</Peroid>
        <Peroid>10.45-11.45</Peroid>
        <Peroid>11.45-12.45</Peroid>
        <Peroid>12.45-16.00</Peroid>
        <Peroid>16.00-18.30</Peroid>
      </Timing>
      <div>
        <Line topDot dashed bottomDot length="250px" />
      </div>
      <Event>
        <Peroid>{props.event[0]}</Peroid>
        <Peroid>{props.event[1]}</Peroid>
        <Peroid>{props.event[2]}</Peroid>
        <Peroid>{props.event[3]}</Peroid>
        <Peroid>{props.event[4]}</Peroid>
        <Peroid>{props.event[5]}</Peroid>
      </Event>
    </Container>
  )
}

export default Timetable
