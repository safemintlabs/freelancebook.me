import { render } from '@redwoodjs/testing/web'

import ScheduleList from './ScheduleList'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ScheduleList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ScheduleList />)
    }).not.toThrow()
  })
})
