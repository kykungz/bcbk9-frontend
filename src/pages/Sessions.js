import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import SocialBar from '../components/SocialBar'
import SessionsComp from '../components/sessions'

class Sessions extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <SocialBar />
        <SessionsComp />
      </div>
    )
  }
}

export default Sessions
