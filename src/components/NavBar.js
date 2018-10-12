import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
  width: 100vw;
`
const MenuGroup = styled.div`
  transform: translateX(-50%);
  margin-left: 50%;
  overflow: hidden;
`
const Menu = styled.div`
  padding: 25px 40px 10px 40px;
  float: ${prop => prop.float};
`
const MenuName = styled.span`
  color: #d63031;
`

export default () => (
  <Container>
    <MenuGroup>
      <Menu float="left">
        <MenuName>TIMETABLE</MenuName>
      </Menu>
      <Menu float="left">
        <MenuName>LOCATION</MenuName>
      </Menu>
      <Menu float="right">
        <MenuName>SPONSOR</MenuName>
      </Menu>
      <Menu float="right">
        <MenuName>SESSIONS</MenuName>
      </Menu>
    </MenuGroup>
  </Container>
)
