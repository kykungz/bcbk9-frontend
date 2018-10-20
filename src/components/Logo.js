import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/logo.svg'
import Barcamp from '../assets/barcamp.svg'
import FBLogo from '../assets/icon_fb.png'
import TWLogo from '../assets/icon_twt.png'
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
const AllSocialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  transform: translateY(-100%);
  top: 100%;
  left: 0px;
  padding: 10px;
  @media (max-width: 650px) {
    display: none;
  }
`
const SocialLogo = styled.img`
  height: 30px;
  width: 30px;
`
const SocialText = styled.span`
  font-size: 16px;
  margin-left: 10px;
  color: white;
`
const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0px;
`
const ContactContainer = styled.div`
  position: absolute;
  transform: translate(-100%, -100%);
  top: 100%;
  left: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 650px) {
    display: none;
  }
  padding: 10px;
`
const ContactText = styled.span`
  font-weight: ${props => (props.border ? 'bold' : 'normal')};
  text-align: right;
  padding: 2px 0px;
  color: white;
`
const SocialComponent = (pic, text, link = '/') => (
  <a href={link} style={{ textDecoration: 'none' }}>
    <SocialContainer>
      <SocialLogo src={pic} />
      <SocialText>{text}</SocialText>
    </SocialContainer>
  </a>
)

export default () => (
  <Container>
    <DetailContainer>
      <LogoComponent src={Logo} />
      <LogoComponent src={Barcamp} />
    </DetailContainer>
    <AllSocialContainer>
      {[
        SocialComponent(FBLogo, 'BarCamp Bangkhen'),
        SocialComponent(TWLogo, '@barcampbangkhen'),
      ]}
    </AllSocialContainer>
    <ContactContainer>
      <ContactText border={true}>Contact Us</ContactText>
      <ContactText border={false}>info@barcampbangkhen.org</ContactText>
    </ContactContainer>
  </Container>
)
