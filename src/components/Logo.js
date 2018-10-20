import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/logo.svg'
import Barcamp from '../assets/barcamp.svg'
import Button from './PrimaryBtn'

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 0 1em;
  box-sizing: border-box;
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
  margin: 1em auto;
  font-size: 30px;
  font-weight: 400;
  color: #a31d58;
`

export default () => (
  <Container>
    <DetailContainer>
      <LogoComponent src={Logo} style={{ marginTop: '40px' }} />
      <LogoComponent src={Barcamp} />
      <DueDate>27 November 2018</DueDate>
      <Button
        style={{
          margin: 'auto',
          width: '270px',
          height: '70px',
        }}
      >
        register now
      </Button>
    </DetailContainer>
  </Container>
)
