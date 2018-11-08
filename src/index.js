import React from 'react'
import ReactDOM from 'react-dom'
import 'loaders.css/src/animations/ball-pulse.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { injectGlobal } from 'styled-components'
import background from './assets/background.png'

injectGlobal`
  body {
    margin: 0;
    padding: 0;
  }

  body:before {
    content: "";
    opacity: var(--opacity, 1);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: fixed;
    z-index: -1;
    background-image: url("${background}");
    background-position: bottom;
    background-size: cover;
    background-repeat: no-repeat;
  }

  * {
    font-family: 'Prompt', sans-serif;
  }
`

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
