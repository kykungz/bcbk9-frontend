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
`
const NumContainer = styled.div`
  flex: 1;
`

const getTab = () => (
  <Tab>
    <TextContainer />
    <NumContainer />
  </Tab>
)

export default () => <Container>{getTab()}</Container>
