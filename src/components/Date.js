import React from 'react'
import styled from 'styled-components'
import Line from './Line'

const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  margin-bottom: 50px;
`
const Timing = styled.div`
  padding-left: 70px;
  text-align: right;
  margin-right: 10px;
`
const Venue = styled.div`
  padding-left: 40px;
  text-align: left;
`
const Heading = styled.div`
  font-weight: bold;
  margin-bottom: 20px;
`
const Content1 = styled.div`
  margin-bottom: 20px;
`

const Date = () => {
  return (
    <Container>
      <Timing>
        <Heading>DATE & TIME</Heading>
        <Content1>25 November 2018</Content1>
        <div>9.00-12.00</div>
      </Timing>
      <div>
        <Line topDot dashed bottomDot length="100px" />
      </div>
      <Venue>
        <Heading>VENUE</Heading>
        <Content1>IUP Building17</Content1>
        <div>Kasetsart University</div>
      </Venue>
    </Container>
  )
}
export default Date
