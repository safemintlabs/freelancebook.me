import { render } from '@redwoodjs/testing/web'

import MainCardSchedule from './MainCardSchedule'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MainCardSchedule', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MainCardSchedule />)
    }).not.toThrow()
  })
})
