import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
`
const Timing = styled.div`
  flex: 1;
  text-align: right;
  margin-right: 10%;
`
const Venue = styled.div`
  flex: 1;
  text-align: left;
`

const Date = () => {
  return (
    <Container>
      <Timing>
        <h4>DATE & TIME</h4>
        <h6>25 November 2018</h6>
        <h6>9.00-12.00</h6>
      </Timing>
      <Venue>
        <h4>VENUE</h4>
        <h6>IUP Building17</h6>
        <h6>Kasetsart University</h6>
      </Venue>
    </Container>
  )
}
export default Date
