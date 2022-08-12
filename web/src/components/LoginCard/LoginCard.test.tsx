import { render } from '@redwoodjs/testing/web'

import LoginCard from './LoginCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LoginCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LoginCard />)
    }).not.toThrow()
  })
})
