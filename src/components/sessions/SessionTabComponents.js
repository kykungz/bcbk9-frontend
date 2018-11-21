import React, { Component } from 'react'

export class SessionTabComponents extends Component {
  render() {
    console.log(this.props.item)
    return (
      <div className="sessiontab">
        <div className="detail">
          <div>{this.props.item.name}</div>
          <div>{this.props.item.speaker}</div>
        </div>
        <div className="room">{this.props.item.number}</div>
      </div>
    )
  }
}

export default SessionTabComponents
