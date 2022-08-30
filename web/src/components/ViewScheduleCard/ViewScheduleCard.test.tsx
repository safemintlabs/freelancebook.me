import { render } from '@redwoodjs/testing/web'

import ViewScheduleCard from './ViewScheduleCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ViewScheduleCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ViewScheduleCard />)
    }).not.toThrow()
  })
})
