import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import RouterView from './router'

class App extends Component {
  render() {
    return (
      <Router>
        <RouterView />
      </Router>
    )
  }
}

export default App
