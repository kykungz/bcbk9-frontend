import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import 'loaders.css/src/animations/ball-pulse.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { injectGlobal } from 'styled-components'
import background from './assets/background.png'

injectGlobal`
  body {
    background-image: url("${background}");
    background-attachment: fixed;
    background-position: bottom;
    background-size: cover;
    background-repeat: no-repeat;
  }
  * {
    font-family: 'Prompt', sans-serif;
  }
  p {
    color: 2e2e2e !important;
  }
`

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
