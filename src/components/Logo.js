import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/logo.svg'
import Barcamp from '../assets/barcamp.svg'
import Button from './PrimaryBtn'

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
  width: 300px;
`
const DueDate = styled.h2`
  margin: auto;
  font-weight: 400;
  color: #a31d58;
`

export default () => (
  <Container>
    <DetailContainer>
      <LogoComponent src={Logo} style={{ marginTop: '40px' }} />
      <LogoComponent src={Barcamp} />
      <Button
        style={{
          margin: '40px auto',
          width: '270px',
          height: '70px',
        }}
      >
        register now
      </Button>
      <DueDate>27 November 2018</DueDate>
    </DetailContainer>
  </Container>
)
