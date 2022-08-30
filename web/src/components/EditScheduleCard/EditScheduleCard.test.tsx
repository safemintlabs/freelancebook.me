import { render } from '@redwoodjs/testing/web'

import EditScheduleCard from './EditScheduleCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EditScheduleCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditScheduleCard />)
    }).not.toThrow()
  })
})
