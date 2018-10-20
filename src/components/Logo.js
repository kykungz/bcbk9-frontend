import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/logo.svg'
import Barcamp from '../assets/barcamp.svg'
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const LogoComponent = styled.img`
  width: 250px;
`
export default () => (
  <div>
    <Container>
      <DetailContainer>
        <LogoComponent src={Logo} />
        <LogoComponent src={Barcamp} />
      </DetailContainer>
    </Container>
  </div>
)
