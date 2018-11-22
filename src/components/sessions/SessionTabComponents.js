import React, { Component } from 'react'

export class SessionTabComponents extends Component {
  render() {
    return (
      <div className="sessiontab">
        <div className="detail">
          {!this.props.item.name ? (
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '40%',
                transform: 'translate(-50%,-50%)',
                fontSize: '24px',
              }}
            >
              unavailable session
            </div>
          ) : (
            <div>
              <div style={{ fontSize: '24px' }}>{this.props.item.name}</div>
              <div>by {this.props.item.speaker}</div>
            </div>
          )}
        </div>
        <div className="room">{this.props.item.room}</div>
      </div>
    )
  }
}

export default SessionTabComponents
