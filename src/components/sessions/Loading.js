import React, { Component } from 'react'
import { PulseLoader } from 'react-spinners'

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
          <PulseLoader
            sizeUnit={'px'}
            // height={10}
            // width={200}
            color={'rgb(176,26,76)'}
          />
        </div>
        {/* <div style={{ textAlign: 'center', color: 'rgb(176,26,76)' }}>
          Loading...
        </div> */}
      </>
    )
  }
}

export default Loading
