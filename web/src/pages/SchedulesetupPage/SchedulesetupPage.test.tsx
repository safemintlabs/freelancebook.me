import { render } from '@redwoodjs/testing/web'

import SchedulesetupPage from './SchedulesetupPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SchedulesetupPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SchedulesetupPage />)
    }).not.toThrow()
  })
})
