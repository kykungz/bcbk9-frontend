import React from 'react'
import styled from 'styled-components'
import Content from './Content'
import time from '../data/time'

const Time = styled.div`
  text-align: left;
  width: 130px;
  display: inline;
  margin-bottom: 20px;
`
const Event = styled.div`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`

const Timetable = styled.div`
  display: flex;
  font-size: 20px;
  max-width: 400px;
  @media (max-width: 350px) {
    font-size: 18px;
  }
`

// const eventTable = e => {
//   return e.map(ev => <Period key={ev}>{ev}</Period>)
// }

export default () => {
  // <Timing>{eventTable(props.time)}</Timing>
  // <Event>{eventTable(props.event)}</Event>
  return (
    <Content title="TIMETABLE">
      {time.map(item => (
        <Timetable key={item.event}>
          <Time>{item.time}</Time>
          <Event>{item.event}</Event>
        </Timetable>
      ))}
    </Content>
  )
}
