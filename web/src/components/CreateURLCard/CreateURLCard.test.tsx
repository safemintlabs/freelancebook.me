import { render } from '@redwoodjs/testing/web'

import CreateUrlCard from './CreateUrlCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CreateUrlCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CreateUrlCard />)
    }).not.toThrow()
  })
})
