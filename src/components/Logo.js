import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/logo.svg'
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const LogoComponent = styled.img`
  width: 20vw;
`
export default () => (
  <Container>
    <LogoComponent src={Logo} />
  </Container>
)
