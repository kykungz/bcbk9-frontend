import React from 'react'
import styled from 'styled-components'
import Content from './Content'

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
const Period = styled.div`
  margin-bottom: 20px;
`

const Timetable = styled.div`
  display: flex;
  font-size: 20px;
`

const eventTable = e => {
  return e.map(ev => <Period key={ev}>{ev}</Period>)
}

export default props => {
  return (
    <Content title="TIMETABLE">
      <Timetable>
        <Timing>{eventTable(props.time)}</Timing>
        <Event>{eventTable(props.event)}</Event>
      </Timetable>
    </Content>
  )
}
