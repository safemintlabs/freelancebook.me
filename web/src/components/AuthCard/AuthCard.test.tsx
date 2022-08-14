import { render } from '@redwoodjs/testing/web'

import AuthCard from './AuthCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AuthCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AuthCard />)
    }).not.toThrow()
  })
})
