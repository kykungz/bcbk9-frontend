import React, { Component } from 'react'
import { BarLoader } from 'react-spinners'

export class Loading extends Component {
  render() {
    return (
      <>
        <div
          style={{
            margin: '10em 0 0 0',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <BarLoader sizeUnit={'px'} size={150} color={'#123abc'} />
        </div>
        <div style={{ textAlign: 'center' }}>Loading...</div>
      </>
    )
  }
}

export default Loading
