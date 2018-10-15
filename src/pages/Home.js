import React from 'react'
//import HelloWorld from '../components/HelloWorld'
import Sponsors from '../components/Sponsors'
import NavBar from '../components/NavBar'
import Location from '../components/Location'

class Home extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Location />
        <Sponsors />
      </div>
    )
  }
}

export default Home
