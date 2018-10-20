import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/logo.svg'
import Barcamp from '../assets/barcamp.svg'
import PrimaryBtn from './PrimaryBtn'
import Loader from 'react-loaders'

const RegisterButton = styled(PrimaryBtn)`
  margin: auto;
  margin-top: 1em;
  padding: 10px 20px;
  animation: Pulse 1s infinite ease-out;

  :hover {
    animation: none;
  }

  @keyframes Pulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }
`

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 0 1em;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LogoComponent = styled.img`
  width: 100%;
  max-width: 240px;
`

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 3em;
  min-height: 370px;

  img {
    width: 100%;
  }

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

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const PulseLoader = styled(Loader)`
  transform: scale(1.2);
  padding: 185px 0;
`

const DueDate = styled.h2`
  margin: 0 auto;
  font-size: 26px;
  font-weight: 400;
  color: #a31d58;
`

export default class extends React.PureComponent {
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
      <Container>
        <DetailContainer>
          {this.state.loading ? (
            <PulseLoader color="#a31d58" type="ball-pulse" />
          ) : (
            <LogoContainer>
              <LogoComponent src={Logo} />
              <LogoComponent src={Barcamp} />
            </LogoContainer>
          )}
          <DueDate>27 November 2018</DueDate>
          <a href="https://apple.com">
            <RegisterButton>register now</RegisterButton>
          </a>
        </DetailContainer>
      </Container>
    )
  }
}
