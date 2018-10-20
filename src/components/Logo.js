import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/logo.svg'
import Barcamp from '../assets/barcamp.svg'
import Loader from 'react-loaders'

import FBLogo from '../assets/icon_fb.png'
import TWLogo from '../assets/icon_twt.png'
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LogoComponent = styled.img`
  width: 300px;
`

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;

  > :first-child {
    animation: FadeIn 3s;
  }

  > :last-child {
    animation: FadeIn 2s;
  }

  @keyframes FadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const PulseLoader = styled(Loader)`
  transform: scale(1.5);
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

export default class extends React.Component {
  state = {
    loading: true,
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        loading: false,
      })
    }, 2000)
  }

  render() {
    return (
      <div>
        <Container>
          {this.state.loading ? (
            <PulseLoader color="#a31d58" type="ball-pulse" />
          ) : (
            <LogoContainer>
              <LogoComponent src={Logo} />
              <LogoComponent src={Barcamp} />
            </LogoContainer>
          )}
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
      </div>
    )
  }
}
