import React from 'react'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'
import Sponsor from '../assets/sponsor.jpeg'

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
  background: url(${prop => prop.url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: white;
  height: 20vw;
  width: 45%;
  border-radius: 20px;
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
    <Container>
      <PairContainer>
        <SponsorImage url={a} />
        <SponsorImage url={b} />
      </PairContainer>
    </Container>
  </Fade>
)
export default () => <>{SponsorImageUrl.map(e => PairSponsor(e[0], e[1]))}</>
