import React, { Component } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'
import store from './store'
import SessionTabs from './SessionTabs'
import SessionTime from './SessionTime'
import logo from '../../assets/Logo150px.png'
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
  constructor(props) {
    super(props)
    this.state = {
      store: new store(),
    }
  }

  render() {
    return (
      <Container>
        {this.state.store.loading.get() ? (
          <h1>LOADING...</h1>
        ) : (
          <div>
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
                <SessionTime store={this.state.store} />
              </div>
              <div className="right">
                <SessionTabs store={this.state.store} />
              </div>
            </div>
          </div>
        )}
      </Container>
    )
  }
}

export default observer(Sessions)
