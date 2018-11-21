import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'
import Hamburger from '../assets/hamburger.svg'
import FacebookIcon from '../assets/facebookIcon.png'
import TwitterIcon from '../assets/twitterIcon.svg'
import './navbar.css'

const Container = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
`

const WhiteContainer = styled.div`
  width: 100vw;
  background: white;
`

const MenuContainer = styled.div`
  max-width: 970px;
  margin: auto;
  display: flex;
  box-sizing: border-box;
  transition: width 0, all 0.6s;
  background-color: white;
  @media (max-width: 650px) {
    min-width: 100vw;
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
const Menu = styled(Link)`
  flex: 1;
  text-align: center;
  padding: 20px 0;
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
  { name: 'timetable', url: '/' },
  { name: 'location', url: '/' },
  { name: 'sponsors', url: '/' },
  { name: 'faqs', url: '/' },
  { name: 'sessions', url: '/sessions' },
]

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = { isDown: false }
    this.onClickBurger = this.onClickBurger.bind(this)
  }

  onClickBurger() {
    this.setState({ isDown: !this.state.isDown })
  }

  menu(name, url) {
    return (
      <Menu
        to={name}
        key={name}
        spy={true}
        smooth={true}
        duration={1000}
        offset={-80}
        onClick={() => this.onClickBurger()}
      >
        <MenuName>
          <RouterLink to={url} className="NavLink">
            {name.toUpperCase()}
          </RouterLink>
        </MenuName>
      </Menu>
    )
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
        <Button
          url={TwitterIcon}
          target="_blank"
          rel="noopenner noreferrer"
          href="https://www.twitter.com/barcampbangkhen"
          float="right"
          size="50% 50%"
        />
        <Button
          url={FacebookIcon}
          target="_blank"
          rel="noopenner noreferrer"
          href="https://www.facebook.com/Barcampbangkhen"
          float="right"
          size="50% 50%"
        />
      </TopDropDown>
      <WhiteContainer>
        <MenuContainer isDown={this.state.isDown}>
          {menuGroup.map(e => this.menu(e.name, e.url))}
        </MenuContainer>
      </WhiteContainer>
      <LineContainer>
        <Line from="#F9967A" to="#D32D64" />
        <Dot />
        <Line from="#CE275F" to="#A90F45" />
      </LineContainer>
    </Container>
  )
}
