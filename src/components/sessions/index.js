import React, { Component } from 'react'
import styled from 'styled-components'
import SessionTabs from './SessionTabs'
import logo from '../../assets/logo-noanimate.png'
import './sessions.css'

const Container = styled.div`
  padding: 0;
  margin: 0 auto;
  margin-bottom: 0;
  padding-bottom: 0;
  margin-top: 3em;
  max-width: 960px;
  background: rgba(201, 201, 201, 0.1);
  border-radius: 25px;
  @media (max-width: 650px) {
    padding: 0;
  }
`
export class Sessions extends Component {
  render() {
    return (
      <Container>
        <div className="session-header">
          <img
            src={logo}
            style={{ width: '120px', height: '100%' }}
            alt="logo"
          />
          <h1>SESSIONS</h1>
        </div>
        <div className="session-body">
          <div className="left">
            <h1>MORNING</h1>
            <div>10:40 - 11:00</div>
            <div>10:40 - 11:00</div>
            <div>10:40 - 11:00</div>
            <h1>MORNING</h1>
            <div>10:40 - 11:00</div>
            <div>10:40 - 11:00</div>
            <div>10:40 - 11:00</div>
            <h1>DONE</h1>
          </div>
          <div className="right">
            <SessionTabs />
          </div>
        </div>
      </Container>
    )
  }
}

export default Sessions
