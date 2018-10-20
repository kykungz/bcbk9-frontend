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
const eventTable  = (e) => {
  return e.map((ev) => <Peroid>{ev}</Peroid>);
}


const Timetable = props => {
  return (
    <Container>
      <Timing>
        {eventTable(props.time)}
      </Timing>
      <div>
        <Line topDot dashed bottomDot length={(42*props.event.length)+"px"} />
      </div>
      <Event>
        {eventTable(props.event)}
      </Event>
    </Container>
  )
}

export default Timetable
