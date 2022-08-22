import { render } from '@redwoodjs/testing/web'

import TopBar from './TopBar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TopBar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TopBar />)
    }).not.toThrow()
  })
})
