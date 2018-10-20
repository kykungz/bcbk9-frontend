import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import RouterView from './router'
import background from './assets/background.png'

const SPEED = 12
const OFFSET = 400

class App extends Component {
  alterBackground = () => {
    if (window.scrollY < SPEED * 100 - OFFSET) {
      const opacity = (window.scrollY / (SPEED * 100)).toFixed(2)
      document.body.style.backgroundImage = `linear-gradient(to bottom, rgba(255,255,255,${opacity}), rgba(255,255,255,${opacity})), url("${background}")`
    }
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
