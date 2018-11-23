import React, { Component } from 'react'
import { BarLoader } from 'react-spinners'

export class Loading extends Component {
  render() {
    return (
      <>
        <div
          style={{
            margin: '1em',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <BarLoader
            sizeUnit={'px'}
            height={10}
            width={200}
            color={'rgb(176,26,76)'}
          />
        </div>
        <div style={{ textAlign: 'center', color: 'rgb(176,26,76)' }}>
          Loading...
        </div>
      </>
    )
  }
}

export default Loading
