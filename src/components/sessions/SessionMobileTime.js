import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

const times = [
  {
    label: '10.40 - 11.05',
    value: '10.40',
  },
  {
    label: '11.10 - 11.35',
    value: '11.10',
  },
  {
    label: '11.40 - 12.05',
    value: '11.40',
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
    label: '15.35 - 16.00',
    value: '15.35',
  },
  {
    label: '16.05 - 16.30',
    value: '16.05',
  },
  {
    label: '16.35 – 17.00',
    value: '16.35',
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
