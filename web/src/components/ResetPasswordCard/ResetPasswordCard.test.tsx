import { render } from '@redwoodjs/testing/web'

import ResetPasswordCard from './ResetPasswordCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ResetPasswordCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ResetPasswordCard />)
    }).not.toThrow()
  })
})
