import React, { Component } from 'react'
import SessionTabComponents from './SessionTabComponents'
const sessionList = [
  {
    name: 'ICEoooooooooooooooooooooooooooo',
    speaker: 'ice',
    number: '17201',
  },
  { name: 'ICEpppppppppppppppppppppp', speaker: 'ice', number: '17201' },
  {
    name: 'ICEppppppppppppppppppppppppppppppppppppppppppppp',
    speaker: 'ice',
    number: '17201',
  },
  { name: 'IpppppppppppCE', speaker: 'ice', number: '17201' },
  { name: 'IpppppppppppppppppCE', speaker: 'ice', number: '17201' },
  { name: 'IlllllllllllllllCE', speaker: 'ice', number: '17201' },
  { name: 'ICE', speaker: 'ice', number: '17201' },
]
export class SessionTabs extends Component {
  render() {
    const sessiontabs = sessionList.map((item, index) => (
      <SessionTabComponents item={item} key={`${item.name + index}`} />
    ))
    return <div className="sessiontab-wrapper">{sessiontabs}</div>
  }
}

export default SessionTabs
