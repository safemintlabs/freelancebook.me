import moment from 'moment'

export const makeMoment = (time) => {
  return moment.isMoment(time) ? time : moment(time, 'HH:mm')
}
