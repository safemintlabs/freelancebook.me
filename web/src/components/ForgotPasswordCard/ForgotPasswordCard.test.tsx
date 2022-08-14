import { render } from '@redwoodjs/testing/web'

import ForgotPasswordCard from './ForgotPasswordCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ForgotPasswordCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ForgotPasswordCard />)
    }).not.toThrow()
  })
})
