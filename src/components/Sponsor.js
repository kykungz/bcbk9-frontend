import React from 'react'
import styled, { css } from 'styled-components'
import { Zoom, Fade } from 'react-reveal'
import Line from './Line'
import byteark from '../assets/silver/byteark.svg'
import lnw from '../assets/silver/lnw.png'
import sellsuki from '../assets/silver/sellsuki.png'
import wisesight from '../assets/silver/wisesight.svg'

// const url =
//   'http://2017.barcampbangkhen.org/static/media/platinum-2.5e7a55c7.svg?fbclid=IwAR2UgEdsDE7BnmFDt51eiayieUkmfRkkn_hMZhFdOkQHj9YvoyCtIyJTH9Q'

const sponsors = {
  // platinum: [
  //   { image: url, url: 'https://apple.com' },
  //   { image: url, url: 'https://apple.com' },
  //   { image: url, url: 'https://apple.com' },
  //   { image: url, url: 'https://apple.com' },
  // ],
  // gold: [
  //   { image: url, url: 'https://apple.com' },
  //   { image: url, url: 'https://apple.com' },
  // ],
  silver: [
    {
      image: byteark,
      url: 'https://apple.com',
    },
    {
      image: lnw,
      url: 'https://apple.com',
    },
    {
      image: sellsuki,
      url: 'https://apple.com',
    },
    {
      image: wisesight,
      url: 'https://apple.com',
    },
  ],
  // bronze: [
  //   { image: url, url: 'https://apple.com' },
  //   { image: url, url: 'https://apple.com' },
  // ],
}

const All = styled.div`
  background: salmon;
`

const Container = styled.div`
  padding: 1em;
  padding-top: 0;
  margin: 0 auto;
  max-width: 960px;
  @media (max-width: 650px) {
    padding: 0;
  }
`

// const Container = styled.div`
//   max-width: 800px;
//   margin: auto;
//   margin-top: 2em;
// `

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
  padding: 30px 0;
  color: white;
`

export default () => (
  <All>
    <Container>
      <Line
        dashed
        right="11px"
        topDot
        length="65"
        color="white"
        style={{ transform: 'rotate(180deg)', marginTop: '7px' }}
      />
      <Title>SPONSOR</Title>
      {Object.keys(sponsors).map(size => (
        <SponsorContainer size={size} key={size}>
          {sponsors[size].map((sponsor, index) => (
            <Sponsor href={sponsor.url} key={index}>
              <Zoom>
                <Fade>
                  <img src={sponsor.image} />
                </Fade>
              </Zoom>
            </Sponsor>
          ))}
        </SponsorContainer>
      ))}
    </Container>
  </All>
)
