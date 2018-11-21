import React, { Component } from 'react'

export class SessionTabComponents extends Component {
  render() {
    return (
      <div className="sessiontab">
        <div className="detail">
          <div style={{ fontSize: '24px' }}>{this.props.item.name}</div>
          <div>by {this.props.item.speaker}</div>
        </div>
        <div className="room">{this.props.item.room}</div>
      </div>
    )
  }
}

export default SessionTabComponents
