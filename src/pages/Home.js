import React from 'react'
//import HelloWorld from '../components/HelloWorld'
import NavBar from '../components/NavBar'
import Location from '../components/Location'
class Home extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Location />
      </div>
    )
  }
}

export default Home
