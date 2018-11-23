import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

const times = [
  {
    label: '10.30 - 10:55',
    value: '10.30',
  },
  {
    label: '11.00 - 11.25',
    value: '11.00',
  },
  {
    label: '11.30 - 11:55',
    value: '11.30',
  },
  {
    label: '13.00 - 13.25',
    value: '13.00',
  },
  {
    label: '13.30 - 13.55',
    value: '13.30',
  },
  {
    label: '14.00 - 14.25',
    value: '14.00',
  },
  {
    label: '14.30 - 14.55',
    value: '14.30',
  },
  {
    label: '15.30 - 15:55',
    value: '15.30',
  },
  {
    label: '16.00 - 16.25',
    value: '16.00',
  },
  {
    label: '16.30 – 16:55',
    value: '16.30',
  },
]

class SessionMobileTime extends Component {
  constructor(props) {
    super(props)
    this._onSelect = this._onSelect.bind(this)
  }

  _onSelect(option) {
    this.props.store.current_selected.set(option.value)
  }

  render() {
    const defaultOption = times.filter(
      item => this.props.store.current_selected.get() === item.value,
    )[0]
    return (
      <div>
        <Dropdown
          options={times}
          onChange={this._onSelect}
          value={defaultOption}
        />
      </div>
    )
  }
}

export default observer(SessionMobileTime)
