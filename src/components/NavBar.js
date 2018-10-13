import React from 'react'
import styled from 'styled-components'
import Background from '../assets/navbar.png'
import Hamburger from '../assets/hamburger.svg'
import FacebookIcon from '../assets/facebookIcon.png'
import TwitterIcon from '../assets/twitterIcon.svg'
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
    display: flex;
    padding: 0px 0px 0px 30px;
  }
`
const MenuName = styled.span`
  color: #d63031;
  @media (max-width: 600px) {
    padding-top: 20px;
    color: white;
    box-sizing: border-box;
  }
`
const TopDropDown = styled.div`
  flex: 1;
  background-color: white;
  display: none;
  @media (max-width: 600px) {
    display: block;
  }
`
const Button = styled.button`
  background: url(${prop => prop.url});
  background-position: center;
  background-size: ${prop => prop.size};
  background-repeat: no-repeat;
  float: ${prop => prop.float};
  width: 60px;
  height: 60px;
  border: none;
`
export default () => (
  <Container src={Background}>
    <TopDropDown>
      <Button url={Hamburger} float="left" size="80% 80%" />
      <Button url={TwitterIcon} float="right" size="50% 50%" />
      <Button url={FacebookIcon} float="right" size="50% 50%" />
    </TopDropDown>
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
