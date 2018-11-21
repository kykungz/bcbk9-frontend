import { observable, computed } from 'mobx'
import moment from 'moment'
import axios from 'axios'

export default class {
  constructor() {
    console.log('store is created')
    this.loading.set(true)
    const sessions = this.sessions
    axios
      .get('https://bcbk-api.herokuapp.com/sessions')
      .then(res => {
        res.data.forEach(item => {
          const key = moment(item.start)
            .utc()
            .format('H.mm')
          if (!sessions[key]) {
            sessions[key] = []
          }
          sessions[key].push(item)
        })
        console.log(this.sessions)
        this.loading.set(false)
      })
      .catch(err => {
        console.log(err)
      })
  }

  sessions = {}

  loading = observable.box(false)

  current_selected = observable.box('')

  // eslint-disable-next-line
  session_by_current_selected = computed(() => {
    return this.sessions[this.current_selected.get()]
  })
}
