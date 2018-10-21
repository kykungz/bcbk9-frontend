import React from 'react'
import NavBar from '../components/NavBar'
import Location from '../components/Location'
import Content from '../components/Content'
import Logo from '../components/Logo'
import Parking from '../components/Parking'
import Faq from '../components/Faq'
import styled from 'styled-components'
import content from '../data/content'
import Timetable from '../components/Timetable'
import Sponsors from '../components/Sponsor'
import SocialBar from '../components/SocialBar'
import { Element } from 'react-scroll'

const Container = styled.div`
  padding: 1em;
  margin: 0 auto;
  margin-bottom: 0;
  padding-bottom: 0;
  margin-top: 3em;
  max-width: 960px;
  @media (max-width: 650px) {
    padding: 0;
  }
`

class Home extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <SocialBar />
        <Logo />
        <Container>
          {content.map((c, cidx) => (
            <Content title={c.title} key={cidx}>
              {c.text.map((t, tidx) => (
                <p key={cidx + '_' + tidx}>{t}</p>
              ))}
            </Content>
          ))}
          <Element name="timetable">
            <Timetable />
          </Element>
          <Element name="location">
            <Location />
          </Element>
          <Parking />
          <Element name="faqs">
            <Faq />
          </Element>
        </Container>
        <Element name="sponsor">
          <Sponsors />
        </Element>
      </div>
    )
  }
}

export default Home
