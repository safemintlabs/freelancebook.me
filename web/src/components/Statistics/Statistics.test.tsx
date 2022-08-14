import { render } from '@redwoodjs/testing/web'

import Statistics from './Statistics'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Statistics', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Statistics />)
    }).not.toThrow()
  })
})
