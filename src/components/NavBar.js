import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
  width: 100vw;
  display: flex;
`
const Menu = styled.div`
  flex: 1;
  text-align: center;
  padding: 25px 0px 15px 0px;
`
const MenuName = styled.span`
  color: #d63031;
`

export default () => (
  <Container>
    <Menu>
      <MenuName>TIMETABLE</MenuName>
    </Menu>
    <Menu>
      <MenuName>LOCATION</MenuName>
    </Menu>
    <Menu>
      <MenuName>SPONSOR</MenuName>
    </Menu>
    <Menu>
      <MenuName>SESSIONS</MenuName>
    </Menu>
  </Container>
)
