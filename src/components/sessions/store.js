import { observable, computed } from 'mobx'
import moment from 'moment'
import axios from 'axios'

export default class {
  constructor() {
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
        this.loading.set(false)
        const times = [
          '10.40',
          '11.10',
          '11.40',
          '13.00',
          '13.30',
          '14.00',
          '14.30',
          '15.35',
          '16.05',
          '16.35',
        ]
        const current_session = times.filter(
          item => parseFloat(moment().format('H.mm')) > parseFloat(item),
        )
        this.current_selected.set(current_session[current_session.length - 1])
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
