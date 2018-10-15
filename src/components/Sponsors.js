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
`
const PairContainer = styled.div`
  width: 69%;
  display: flex;
  justify-content: space-between;
  padding: calc(69% / 20) 0px;

  @media (max-width: 650px) {
    flex-direction: column;
    padding: 0px;
  }
`
const SponsorImage = styled.div`
  background: url(${prop => prop.url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: white;
  height: 20vw;
  width: calc(69vw * 45 / 100);
  border-radius: 2vw;
  @media (max-width: 650px) {
    border-radius: 3vw;
    width: 69vw;
    height: 34vw;
    margin: calc(69vw / 20) 0px;
  }
`

const SponsorImageUrl = [
  [Sponsor, Sponsor],
  [Sponsor, Sponsor],
  [Sponsor, Sponsor],
  [Sponsor, Sponsor],
  [Sponsor, Sponsor],
  [Sponsor, Sponsor],
  [Sponsor, Sponsor],
]

const PairSponsor = (a, b) => (
  <Container>
    <PairContainer>
      <Fade bottom>
        <Zoom>
          <SponsorImage url={a} />
        </Zoom>
      </Fade>
      <Fade bottom>
        <Zoom>
          <SponsorImage url={b} />
        </Zoom>
      </Fade>
    </PairContainer>
  </Container>
)
export default () => (
  <Background>{SponsorImageUrl.map(e => PairSponsor(e[0], e[1]))}</Background>
)
