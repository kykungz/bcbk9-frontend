import React from 'react'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import styled from 'styled-components'
import Sponsor from '../assets/sponsor.jpeg'

const Background = styled.div`
  background-color: #fccbbe;
  padding-top: calc(69vw / 10);
`
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: ${prop =>
    prop.isSep ? `calc(69vw / 20 * ${prop.size})` : '0px'};
  @media (max-width: 650px) {
    align-items: center;
    flex-direction: column;
  }
`
const getPropSize = prop => prop.size
const SponsorImage = styled.img`
  background-color: white;
  height: calc(69vw * 45 / 150 * ${getPropSize});
  width: calc(69vw * 45 / 100 * ${getPropSize});
  border-radius: 2vw;
  margin: calc(69vw / 20 * ${getPropSize});
  @media (max-width: 650px) {
    border-radius: 3vw;
    width: calc(69vw * ${getPropSize});
    height: calc(69vw / 1.5 * ${getPropSize});
    margin: calc(69vw / 20 * ${getPropSize}) 0px;
  }
`

const SponsorImageUrl = [
  { PicUrls: [Sponsor, Sponsor], size: 1, urls: ['/', '/'] },
  { PicUrls: [Sponsor, Sponsor], size: 1, urls: ['/', '/'] },
  { PicUrls: [Sponsor, Sponsor], size: 0.9, urls: ['/', '/'] },
  { PicUrls: [Sponsor, Sponsor], size: 0.9, urls: ['/', '/'] },
  { PicUrls: [Sponsor, Sponsor], size: 0.8, urls: ['/', '/'] },
  { PicUrls: [Sponsor, Sponsor], size: 0.8, urls: ['/', '/'] },
  { PicUrls: [Sponsor, Sponsor], size: 0.7, urls: ['/', '/'] },
  { PicUrls: [Sponsor, Sponsor], size: 0.7, urls: ['/', '/'] },
  { PicUrls: [Sponsor, Sponsor], size: 0.6, urls: ['/', '/'] },
  { PicUrls: [Sponsor, Sponsor], size: 0.6, urls: ['/', '/'] },
  { PicUrls: [Sponsor, Sponsor], size: 0.5, urls: ['/', '/'] },
  { PicUrls: [Sponsor, Sponsor], size: 0.5, urls: ['/', '/'] },
]

const PairSponsor = (a, i, sep) => (
  <Container size={a.size} isSep={sep} key={i}>
    <Fade bottom>
      <Zoom>
        <a href={a.urls[0]}>
          <SponsorImage src={a.PicUrls[0]} size={a.size} />
        </a>
      </Zoom>
    </Fade>
    <Fade bottom>
      <Zoom>
        <a href={a.urls[1]}>
          <SponsorImage src={a.PicUrls[1]} size={a.size} />
        </a>
      </Zoom>
    </Fade>
  </Container>
)

export default () => (
  <Background>
    {SponsorImageUrl.map((e, i, arr) =>
      PairSponsor(e, i, i === 0 || e.size !== arr[i - 1].size),
    )}
  </Background>
)
