import React, { Component } from 'react'
import styled from 'styled-components'
import Hamburger from '../assets/hamburger.svg'
import FacebookIcon from '../assets/facebookIcon.png'
import TwitterIcon from '../assets/twitterIcon.svg'
const Container = styled.div`
  position: fixed;
  z-index: 1000;
`
const MenuContainer = styled.div`
  width: 100vw;
  display: flex;
  box-sizing: border-box;
  padding: 0px 100px;
  transition: width 0, all 0.6s;
  background-color: white;
  @media (max-width: 650px) {
    position: fixed;
    transition: 0.6s;
    top: ${prop => (prop.isDown ? '60px' : '-300px')};
    padding: 0px;
    height: 300px;
    flex-direction: column;
    background: none;
    background-image: linear-gradient(#ef867a, #c93267);
  }
`
const Menu = styled.div`
  flex: 1;
  text-align: center;
  padding: 20px 0px 20px 0px;
  transition: 0.6s;
  display: flex;
  justify-content: center;
  @media (max-width: 650px) {
    justify-content: left;
    padding: 0px 0px 0px 30px;
  }
`
const MenuName = styled.span`
  font-weight: 600;
  transition: 0.6s;
  @media (max-width: 650px) {
    padding-top: 20px;
    box-sizing: border-box;
  }
`
const A = styled.a`
  color: #ab0057;
  text-decoration: none;
  &:hover {
    color: #ab0057;
  }
  @media (max-width: 650px) {
    color: white;
    &:hover {
      color: white;
    }
  }
`

const TopDropDown = styled.div`
  position: fixed;
  height: 60px;
  width: 100vw;
  background-color: white;
  display: none;
  z-index: 1000;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
  @media (max-width: 650px) {
    display: block;
  }
`
const Button = styled.a`
  background: url(${prop => prop.url});
  background-position: center;
  background-size: ${prop => prop.size};
  background-repeat: no-repeat;
  float: ${prop => prop.float};
  width: 60px;
  height: 60px;
  border: none;
`

const LineContainer = styled.div`
  left: 0px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -12.5px;
  @media (max-width: 650px) {
    display: none;
  }
`
const Dot = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: #d1446a;
  margin: 0px 10px;
`
const Line = styled.div`
  height: 4px;
  background-image: linear-gradient(
    to right,
    ${props => props.from + ', ' + props.to}
  );
  width: 40%;
`
const menuGroup = [
  { name: 'TIMETABLE', url: '/' },
  { name: 'LOCATION', url: '/' },
  { name: 'SPONSOR', url: '/' },
  { name: 'FAQ', url: '/' },
  { name: 'SESSIONS', url: '/' },
]

const menu = (name, url) => (
  <Menu>
    <MenuName>
      <A href={url}>{name}</A>
    </MenuName>
  </Menu>
)

export default class extends Component {
  state = { isDown: false }
  onClickBurger = () => {
    this.setState({ isDown: !this.state.isDown })
  }
  render = () => (
    <Container>
      <TopDropDown>
        <Button
          onClick={this.onClickBurger}
          url={Hamburger}
          float="left"
          size="80% 80%"
        />
        <Button url={TwitterIcon} href="/" float="right" size="50% 50%" />
        <Button url={FacebookIcon} href="/" float="right" size="50% 50%" />
      </TopDropDown>
      <MenuContainer isDown={this.state.isDown}>
        {menuGroup.map(e => menu(e.name, e.url))}
      </MenuContainer>
      <LineContainer>
        <Line from="#F9967A" to="#D32D64" />
        <Dot />
        <Line from="#CE275F" to="#A90F45" />
      </LineContainer>
    </Container>
  )
}
