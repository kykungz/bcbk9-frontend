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
  @media (max-width: 600px) {
    height: 300px;
    flex-direction: column;
    background: none;
    background-image: linear-gradient(#ff7675, #d63031);
  }
`
const Menu = styled.div`
  flex: 1;
  text-align: center;
  padding: 30px 0px 40px 0px;
  @media (max-width: 600px) {
    justify-content: center;
    display: flex;
    padding: 0px;
  }
`
const MenuName = styled.span`
  color: #d63031;
  @media (max-width: 600px) {
    padding-top: 25px;
    color: white;
    box-sizing: border-box;
  }
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
