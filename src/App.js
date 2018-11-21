import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import RouterView from './router'

const SPEED = 12
const OFFSET = 400

class App extends Component {
  alterBackground = () => {
    let opacity
    if (window.scrollY < SPEED * 100 - OFFSET) {
      opacity = (window.scrollY / (SPEED * 100)).toFixed(2)
    } else {
      opacity = (1 - OFFSET / (SPEED * 100)).toFixed(2)
    }
    document.body.style.setProperty('--opacity', 1 - opacity)
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.alterBackground)
    this.alterBackground()
  }

  render() {
    return (
      <Router>
        <RouterView />
      </Router>
    )
  }
}

export default App
