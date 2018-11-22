import React, { Component } from 'react'
import { observer } from 'mobx-react'
import SessionTabComponents from './SessionTabComponents'

export class SessionTabs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sessionList: [],
    }
  }

  componentDidMount() {
    this.props.store.session_by_current_selected.observe(change => {
      this.setState({ sessionList: change.newValue })
    })
  }

  render() {
    const sessiontabs = this.state.sessionList ? (
      this.state.sessionList.map((item, index) => (
        <SessionTabComponents item={item} key={`${item.name + index}`} />
      ))
    ) : (
      <div />
    )
    return <div className="sessiontab-wrapper">{sessiontabs}</div>
  }
}

export default observer(SessionTabs)
