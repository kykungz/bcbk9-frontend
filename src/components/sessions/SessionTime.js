import React, { Component } from 'react'
import { observer } from 'mobx-react'

export const times = [
  {
    name: 'MORNING',
    value: false,
  },
  {
    name: '10.30 - 10:55',
    value: '10.30',
  },
  {
    name: '11.00 - 11.25',
    value: '11.00',
  },
  {
    name: '11.30 - 11:55',
    value: '11.30',
  },
  {
    name: 'LUNCH',
    value: false,
  },
  {
    name: '13.00 - 13.25',
    value: '13.00',
  },
  {
    name: '13.30 - 13.55',
    value: '13.30',
  },
  {
    name: '14.00 - 14.25',
    value: '14.00',
  },
  {
    name: '14.30 - 14.55',
    value: '14.30',
  },
  {
    name: 'BREAK',
    value: false,
  },
  {
    name: '15.30 - 15:55',
    value: '15.30',
  },
  {
    name: '16.00 - 16.25',
    value: '16.00',
  },
  {
    name: '16.30 – 16:55',
    value: '16.30',
  },
  {
    name: 'DONE',
    value: false,
  },
]

class SessionTime extends Component {
  render() {
    const current_selected = this.props.store.current_selected
    const time_comp = times.map((item, index) => {
      if (!item.value)
        return (
          <div className="time-head" key={`${item.name + index}`}>
            <h1 key={`${item.name + index}`}>{item.name}</h1>
            <div>
              <div />
            </div>
          </div>
        )
      return (
        <div
          key={`${item.name + index}`}
          onClick={() => current_selected.set(item.value)}
          className={`${
            current_selected.get() === item.value ? 'time active' : 'time'
          }`}
        >
          <span>{item.name}</span>
        </div>
      )
    })
    return (
      <>
        {time_comp}
        <div className="line-time" />
      </>
    )
  }
}
export default observer(SessionTime)
