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
const SponsorImage = styled.img`
  background-color: white;
  height: calc(69vw * 45 / 150 * ${prop => prop.size});
  width: calc(69vw * 45 / 100 * ${prop => prop.size});
  border-radius: 2vw;
  margin: calc(69vw / 20 * ${prop => prop.size});
  @media (max-width: 650px) {
    border-radius: 3vw;
    width: calc(69vw * ${prop => prop.size});
    height: calc(69vw / 1.5 * ${prop => prop.size});
    margin: calc(69vw / 20 * ${prop => prop.size}) 0px;
  }
`

const SponsorImageUrl = [
  { urls: [Sponsor, Sponsor], size: 1 },
  { urls: [Sponsor, Sponsor], size: 1 },
  { urls: [Sponsor, Sponsor], size: 0.9 },
  { urls: [Sponsor, Sponsor], size: 0.9 },
  { urls: [Sponsor, Sponsor], size: 0.8 },
  { urls: [Sponsor, Sponsor], size: 0.8 },
  { urls: [Sponsor, Sponsor], size: 0.7 },
  { urls: [Sponsor, Sponsor], size: 0.7 },
  { urls: [Sponsor, Sponsor], size: 0.6 },
  { urls: [Sponsor, Sponsor], size: 0.6 },
  { urls: [Sponsor, Sponsor], size: 0.5 },
  { urls: [Sponsor, Sponsor], size: 0.5 },
]

const PairSponsor = (a, i, sep) => (
  <Container size={a.size} isSep={sep} key={i}>
    <Fade bottom>
      <Zoom>
        <SponsorImage src={a.urls[0]} size={a.size} />
      </Zoom>
    </Fade>
    <Fade bottom>
      <Zoom>
        <SponsorImage src={a.urls[1]} size={a.size} />
      </Zoom>
    </Fade>
  </Container>
)
export default () => (
  <Background>
    {SponsorImageUrl.map((e, i, arr) => {
      if (i === 0 || e.size !== arr[i - 1].size) return PairSponsor(e, i, true)
      return PairSponsor(e, i, false)
    })}
  </Background>
)
