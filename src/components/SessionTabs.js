import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
  width: 43vw;
`
const Tab = styled.div`
  display: flex;
  background-image: linear-gradient(to right, #f38b7b, #983a7a);
  border-radius: 2vw;
  width: 100%;
  height: calc(43vw / 5.4);
`
const TextContainer = styled.div`
  flex: 4.4;
  display: flex;
  flex-direction: column;
`
const NumContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Circle = styled.div`
  background-color: white;
  height: 85%;
  width: 85%;
  border-radius: 50%;
  display: flex;
  justufy-content: center;
  align-items: center;
`
const SessionName = styled.span`
  flex: 1;
`
const SpeakerName = styled.span`
  flex: 1;
`
const Number = styled.span`
  flex: 1;
  text-align: center;
  color: #ee4e4f;
  font-size: 2vw;
`
const getTab = () => (
  <Tab>
    <TextContainer>
      <SessionName />
      <SpeakerName />
    </TextContainer>
    <NumContainer>
      <Circle>
        <Number>17201</Number>
      </Circle>
    </NumContainer>
  </Tab>
)

export default () => <Container>{getTab()}</Container>
