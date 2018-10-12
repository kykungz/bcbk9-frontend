import React from 'react'
import styled from 'styled-components'
import Background from '../assets/navbar.png'
const Container = styled.div`
  width: 100vw;
  display: flex;
  background: url(${prop => prop.src});
  background-size: cover;
  background-position: center;
  height: 130px;
`
const Menu = styled.div`
  flex: 1;
  text-align: center;
  padding: 30px 0px 40px 0px;
`
const MenuName = styled.span`
  color: #d63031;
`

export default () => (
  <Container src={Background}>
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
