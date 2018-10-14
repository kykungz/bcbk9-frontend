import React from 'react'
//import Fade from 'react-reveal/Fade'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center
  flex-direction: column;
`
const PairContainer = styled.div`
  width: 69%;
  display: flex;
  justify-content: space-between;
  padding: calc(69% / 20) 0px;
`
const SponsorImage = styled.div`
  background-color: red;
  height: 20vw;
  width: 45%;
  border-radius: 20px;
  @media (max-width: 650px) {
    border-radius: 10px;
  }
`
export default () => (
  <Container>
    <PairContainer>
      <SponsorImage />
      <SponsorImage />
    </PairContainer>
    <PairContainer>
      <SponsorImage />
      <SponsorImage />
    </PairContainer>
  </Container>
)
