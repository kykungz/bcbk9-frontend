import React, { Component } from 'react'
import { observer } from 'mobx-react'

export const times = [
  {
    name: 'MORNING',
    value: false,
  },
  {
    name: '10.40 - 11.05',
    value: '10.40',
  },
  {
    name: '11.10 - 11.35',
    value: '11.10',
  },
  {
    name: '11.40 - 12.05',
    value: '11.40',
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
    name: '15.35 - 16.00',
    value: '15.35',
  },
  {
    name: '16.05 - 16.30',
    value: '16.05',
  },
  {
    name: '16.35 – 17.00',
    value: '16.35',
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
          <div className="time-head">
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
