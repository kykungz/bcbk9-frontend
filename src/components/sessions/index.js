import React, { Component } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'
import store from './store'
import SessionTabs from './SessionTabs'
import SessionTime from './SessionTime'
import SessionMobileTime from './SessionMobileTime'
import logo from '../../assets/Logo150px.png'
import logoName from '../../assets/logo-barcamp.svg'
import Loading from './Loading'
import './sessions.css'

const Container = styled.div`
  padding: 0;
  margin: 0 auto;
  margin-bottom: 0;
  padding-bottom: 0;
  margin-top: 6em;
  max-width: 960px;
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 0.2);
  @media (max-width: 650px) {
    padding: 0;
  }
`
export class Sessions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      store: new store(),
    }
  }

  render() {
    if (this.state.store.loading.get()) return <Loading />
    return (
      <Container>
        <>
          <div className="session-header">
            <div>
              <img src={logo} alt="logo" />
              <img src={logoName} alt="logo" />
            </div>
            <h1>SESSIONS</h1>
          </div>
          <div className="session-body">
            <div className="left">
              <SessionTime store={this.state.store} />
            </div>
            <div className="left-mobile">
              <SessionMobileTime store={this.state.store} />
            </div>
            <div className="right">
              <SessionTabs store={this.state.store} />
            </div>
          </div>
        </>
      </Container>
    )
  }
}

export default observer(Sessions)
