import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/logo.svg'
// import Barcamp from '../assets/barcamp.png'
import Barcamp from '../assets/logo-barcamp.svg'
import PrimaryBtn from './PrimaryBtn'
import Loader from 'react-loaders'
import moment from 'moment'
import { Link } from 'react-router-dom'

const RegisterButton = styled(PrimaryBtn)`
  :not(:disabled) {
    animation: Pulse 1s infinite ease-out;

    @keyframes Pulse {
      0%,
      100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
    }
  }
  margin: auto;
  margin-top: 1em;
  padding: 10px 20px;
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

const PulseLoader = styled(Loader)`
  transform: scale(1.2);
  padding: 170px 0;
`

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 3em;
  min-height: 370px;
  width: 100vw;
  box-sizing: border-box;

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

const DueDate = styled.h2`
  margin: 0 auto;
  font-size: 26px;
  font-weight: 400;
  color: #a31d58;
`

const ClosedButton = styled.div`
  margin: 30px;
  padding: 1em 2em;
  border-radius: 25px;
  color: white;
  background-image: linear-gradient(#ef867a, #c93267);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: all 200ms ease-in-out;
  &:hover {
    transition: all 200ms ease-in-out;
    box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.2),
      0 6px 20px 0 rgba(255, 255, 255, 0.19);
  }
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

  getButton() {
    const eventDate = '25112018'
    let button
    if (
      moment()
        .format('DMY')
        .localeCompare(eventDate) >= 0
    ) {
      button = (
        <Link to="/sessions">
          <RegisterButton>
            view sessions
            <sup style={{ margin: '10px', color: 'rgb(244,177,161)' }}>new</sup>
          </RegisterButton>
        </Link>
      )
    } else if (
      moment()
        .format('DMYHH')
        .localeCompare('2411201812') >= 0
    ) {
      button = (
        <ClosedButton>
          Registration Closed
          <br />
          Walk Ins Welcome
        </ClosedButton>
      )
    } else {
      button = (
        <a
          href="https://goo.gl/Shs6VY"
          rel="noopener noreferrer"
          target="_blank"
        >
          <RegisterButton>register now</RegisterButton>
        </a>
      )
    }
    return button
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
              <LogoComponent style={{ marginTop: '0.5em' }} src={Barcamp} />
            </LogoContainer>
          )}
          <DueDate>25 November 2018</DueDate>
          {this.getButton()}
        </DetailContainer>
      </Container>
    )
  }
}
