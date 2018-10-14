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
`
const SponsorImage = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: white;
  height: 20vw;
  width: 45%;
  border-radius: 20px 20px;
  @media (max-width: 650px) {
    border-radius: 10px;
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
  <Fade bottom>
    <Zoom>
      <Container>
        <PairContainer>
          <SponsorImage url={a} />
          <SponsorImage url={b} />
        </PairContainer>
      </Container>
    </Zoom>
  </Fade>
)
export default () => (
  <Background>{SponsorImageUrl.map(e => PairSponsor(e[0], e[1]))}</Background>
)
