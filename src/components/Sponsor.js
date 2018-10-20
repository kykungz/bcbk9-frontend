import React from 'react'
import styled, { css } from 'styled-components'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import byteark from '../assets/silver/byteark.svg'
import lnw from '../assets/silver/lnw.png'
import sellsuki from '../assets/silver/sellsuki.png'
import wisesight from '../assets/silver/wisesight.svg'

// const url =
// 'http://2017.barcampbangkhen.org/static/media/platinum-2.5e7a55c7.svg?fbclid=IwAR2UgEdsDE7BnmFDt51eiayieUkmfRkkn_hMZhFdOkQHj9YvoyCtIyJTH9Q'

const sponsors = {
  // platinum: [url, url, url, url],
  // gold: [url, url],
  silver: [byteark, lnw, sellsuki, wisesight],
  // bronze: [url, url],
}

const All = styled.div`
  padding: 1em;
  padding-top: 2em;
  background: salmon;
`

const Container = styled.div`
  max-width: 800px;
  margin: auto;
  margin-top: 2em;
`

const Sponsor = styled.div`
  img {
    border-radius: 16px;
    width: 100%;
  }
`
const SponsorContainer = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: 1fr 1fr;
  margin: 1em 0;

  ${props =>
    props.size === 'platinum' &&
    css`
      @media (max-width: 650px) {
        grid-template-columns: 1fr;
      }
    `}

  ${props =>
    props.size === 'gold' &&
    css`
      margin: 1em 100px;
    `}
  ${props =>
    props.size === 'silver' &&
    css`
      margin: 1em 150px;
    `}
  
  ${props =>
    props.size === 'bronze' &&
    css`
      margin: 1em 200px;
    `}
`

export default () => (
  <All>
    <Container>
      {Object.keys(sponsors).map(size => (
        <SponsorContainer size={size} key={size}>
          {sponsors[size].map((url, index) => (
            <Sponsor key={index}>
              <Zoom>
                <Fade>
                  <img src={url} />
                </Fade>
              </Zoom>
            </Sponsor>
          ))}
        </SponsorContainer>
      ))}
    </Container>
  </All>
)
