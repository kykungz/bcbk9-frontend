import React, { Component } from 'react'
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
  transition: 0.6s;
  @media (max-width: 600px) {
    height: 300px;
    height: ${prop => (prop.isDown ? '300px' : '60px')};
    flex-direction: column;
    background: none;
    background-image: linear-gradient(#ef867a, #c93267);
  }
`
const Menu = styled.div`
  flex: 1;
  text-align: center;
  padding: 30px 0px 40px 0px;
  transition: 0.6s;
  display: flex;
  justify-content: center;
  @media (max-width: 600px) {
    justify-content: left;
    padding: 0px 0px 0px 30px;
    flex: ${prop => (prop.isDown ? 1 : 0)};
  }
`
const MenuName = styled.span`
  font-weight: 600;
  color: #ab0057;
  transition: 0.6s;
  @media (max-width: 600px) {
    padding-top: 20px;
    color: white;
    box-sizing: border-box;
    opacity: ${prop => (prop.isDown ? 1 : 0)};
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
export default class extends Component {
  constructor(props) {
    super(props)
    this.state = { isDown: false }
  }
  onClickBurger = () => {
    console.log(this.state.isDown)
    this.setState({ isDown: !this.state.isDown })
  }
  render = () => (
    <Container src={Background} isDown={this.state.isDown}>
      <TopDropDown>
        <Button
          onClick={this.onClickBurger}
          url={Hamburger}
          float="left"
          size="80% 80%"
        />
        <Button url={TwitterIcon} float="right" size="50% 50%" />
        <Button url={FacebookIcon} float="right" size="50% 50%" />
      </TopDropDown>
      <Menu isDown={this.state.isDown}>
        <MenuName isDown={this.state.isDown}>TIMETABLE</MenuName>
      </Menu>
      <Menu isDown={this.state.isDown}>
        <MenuName isDown={this.state.isDown}>LOCATION</MenuName>
      </Menu>
      <Menu isDown={this.state.isDown}>
        <MenuName isDown={this.state.isDown}>SPONSOR</MenuName>
      </Menu>
      <Menu isDown={this.state.isDown}>
        <MenuName isDown={this.state.isDown}>SESSIONS</MenuName>
      </Menu>
    </Container>
  )
}
