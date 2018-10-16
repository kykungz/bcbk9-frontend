import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
  width: 43vw;
  @media (max-width: 650px) {
    width: 90vw;
  }
`
const Tab = styled.div`
  display: flex;
  background-image: linear-gradient(to right, #f38b7b, #983a7a);
  border-radius: 2vw;
  width: 100%;
  margin-bottom: 10px;
`
const TextContainer = styled.div`
  flex: 4.4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 3%;
  padding-top: 3%;
`
const NumContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Circle = styled.div`
  background-color: white;
  width: calc(43vw / 540 * 85);
  border-radius: 50%;
  display: flex;
  justufy-content: center;
  align-items: center;
  margin: calc(43vw / 1080 * 15) 0px;
  height: calc(43vw / 540 * 85);
  @media (max-width: 650px) {
    margin: calc(90vw / 1080 * 15) 0px;
    width: calc(90vw / 540 * 85);
    height: calc(90vw / 540 * 85);
  }
`
const SessionName = styled.span`
  word-wrap: break-word;
  color: white;
  margin-left: calc(100% / 34);
  font-size: 2vw;
  width: 30vw;
  @media (max-width: 650px) {
    font-size: 4vw;
    width: 65vw;
  }
`
const SpeakerName = styled.span`
  word-wrap: break-word;
  color: white;
  margin-left: calc(100% / 34);
  width: 30vw;
  font-size: 1.8vw;
  @media (max-width: 650px) {
    font-size: 3.6vw;
  }
`
const Number = styled.span`
  flex: 1;
  text-align: center;
  color: #ee4e4f;
  font-size: 2vw;
  @media (max-width: 650px) {
    font-size: 4vw;
  }
`
const getTab = (name, speaker, number) => (
  <Tab>
    <TextContainer>
      <SessionName>{name}</SessionName>
      <SpeakerName>by {speaker}</SpeakerName>
    </TextContainer>
    <NumContainer>
      <Circle>
        <Number>{number}</Number>
      </Circle>
    </NumContainer>
  </Tab>
)

const sessionList = [
  {
    name:
      'ICEoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
    speaker: 'ice',
    number: '00000',
  },
  { name: 'ICE', speaker: 'ice', number: '00000' },
  { name: 'ICE', speaker: 'ice', number: '00000' },
  { name: 'ICE', speaker: 'ice', number: '00000' },
  { name: 'ICE', speaker: 'ice', number: '00000' },
  { name: 'ICE', speaker: 'ice', number: '00000' },
  { name: 'ICE', speaker: 'ice', number: '00000' },
]

export default () => (
  <Container>
    {sessionList.map(e => getTab(e.name, e.speaker, e.number))}
  </Container>
)
