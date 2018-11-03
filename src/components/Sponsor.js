import React from 'react'
import styled, { css } from 'styled-components'
import { Zoom, Fade } from 'react-reveal'
import Line from './Line'

//bronze
import ookbee from '../assets/bronze/ookbee.svg'
import pantip from '../assets/bronze/pantip-purple.svg'

//silver
import gummybear from '../assets/silver/gummybear.png'
import byteark from '../assets/silver/byteark.svg'
import lnw from '../assets/silver/lnw.png'
import sellsuki from '../assets/silver/sellsuki.png'
import wisesight from '../assets/silver/wisesight.svg'
import yannix from '../assets/silver/yannix.svg'

import kulap from '../assets/silver/kulap.svg'

//gold
import metromerce from '../assets/gold/metromerce.svg'
import taskworld from '../assets/gold/taskworld.svg'

//platinum
import cpsk from '../assets/platinum/cpsk.svg'
import TW from '../assets/platinum/TW.png'
import wongnai from '../assets/platinum/wongnai-white.svg'
import exxon from '../assets/platinum/exxonmobil.svg'

// const url =
//   'http://2017.barcampbangkhen.org/static/media/platinum-2.5e7a55c7.svg?fbclid=IwAR2UgEdsDE7BnmFDt51eiayieUkmfRkkn_hMZhFdOkQHj9YvoyCtIyJTH9Q'

const sponsors = {
  platinum: [
    { image: cpsk, url: 'https://www.cpe.ku.ac.th/' },
    { image: exxon, url: 'https://corporate.exxonmobil.com/en' },
    { image: TW, url: 'https://www.thoughtworks.com/' },
    { image: wongnai, url: 'https://www.wongnai.com/' },
  ],
  gold: [
    { image: metromerce, url: 'https://www.metromerce.com/' },
    { image: taskworld, url: 'https://taskworld.com/' },
  ],
  silver: [
    {
      image: byteark,
      url: 'https://www.byteark.com/en/home-landing-page/',
    },
    {
      image: gummybear,
      url: 'http://gummybear.asia/',
    },
    {
      image: lnw,
      url: 'https://lnw.co.th/',
    },
    {
      image: sellsuki,
      url: 'https://www.sellsuki.co.th/',
    },
    {
      image: wisesight,
      url: 'https://wisesight.com/',
    },
    {
      image: yannix,
      url: 'https://www.yannix.com/',
    },
  ],
  bronze: [
    { image: ookbee, url: 'http://www.ookbee.com/' },
    { image: pantip, url: 'https://pantip.com/' },
  ],
}

const All = styled.div`
  background: salmon;
  overflow: hidden;
`

const Container = styled.div`
  padding: 1em;
  padding-top: 0;
  margin: 0 auto;
  max-width: 960px;
`

const Sponsor = styled.a`
  img {
    border-radius: 16px;
    width: 100%;
  }
`
const SponsorContainer = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: 1fr 1fr;
  margin: auto;
  margin-top: 1em;
  padding-bottom: 2em;

  ${props =>
    props.size === 'platinum' &&
    css`
      @media (max-width: 480px) {
        grid-template-columns: 1fr;
      }
    `}

  ${props =>
    props.size === 'gold' &&
    css`
      width: 90%;
      @media (max-width: 480px) {
        grid-template-columns: 1fr;
        width: 80%;
      }
    `}
  ${props =>
    props.size === 'silver' &&
    css`
      width: 80%;
    `}

  ${props =>
    props.size === 'bronze' &&
    css`
      width: 70%;
    `}
`

const Title = styled.h1`
  font-size: 28px;
  margin: 0 2.5em;
  padding: 40px 0;
  color: white;
`

const StyledLine = styled(Line)`
  transform: rotate(180deg);
  margin-top: 7px;
  @media (max-width: 650px) {
    margin-left: -5px;
  }
`

export default () => (
  <All>
    <Container>
      <StyledLine dashed right="11px" topDot length="65" color="white" />
      <Title>SPONSORS</Title>
      {Object.keys(sponsors).map(size => (
        <>
          <SponsorContainer size={size} key={size}>
            {sponsors[size].map((sponsor, index) => (
              <Sponsor href={sponsor.url} key={index}>
                <Zoom>
                  <Fade>
                    <img src={sponsor.image} alt="sponsor" />
                  </Fade>
                </Zoom>
              </Sponsor>
            ))}
          </SponsorContainer>
          <SponsorContainer
            size="silver"
            style={{
              paddingLeft: '50%',
              display: size === 'silver' ? 'grid' : 'none',
              marginTop: '0px',
            }}
          >
            <Sponsor
              href="https://www.kulap.io/"
              style={{ transform: 'translateX(-50%)' }}
            >
              <Zoom>
                <Fade>
                  <img src={kulap} alt="sponsor" />
                </Fade>
              </Zoom>
            </Sponsor>
          </SponsorContainer>
        </>
      ))}
    </Container>
  </All>
)
