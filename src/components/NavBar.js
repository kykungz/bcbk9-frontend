import React, { Component } from 'react'
import styled from 'styled-components'
import Background from '../assets/navbar.png'
import Hamburger from '../assets/hamburger.svg'
import FacebookIcon from '../assets/facebookIcon.png'
import TwitterIcon from '../assets/twitterIcon.svg'
const MenuContainer = styled.div`
  position: fixed;
  width: 100vw;
  display: flex;
  background: url(${prop => prop.src});
  background-size: cover;
  background-position: center;
  height: 130px;
  box-sizing: border-box;
  padding: 0px 100px;
  transition: width 0, all 0.6s;
  @media (max-width: 650px) {
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
  padding: 30px 0px 40px 0px;
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
    <>
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
      <MenuContainer src={Background} isDown={this.state.isDown}>
        {menuGroup.map(e => menu(e.name, e.url))}
      </MenuContainer>
    </>
  )
}